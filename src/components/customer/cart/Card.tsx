import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from "@stripe/react-stripe-js"
import { loadStripe, Stripe } from "@stripe/stripe-js"
import axios from "axios"
import { IproductDetail } from "models/Product"
import React, { FormEvent, ReactElement, useEffect } from "react"
import { useHistory } from "react-router"
import {
  downCart,
  findByField,
  parseJwt,
  persistEntity,
  persistEntityNT
} from "services"
import styled from "styled-components"

const stripeP: Promise<Stripe> = loadStripe(
  "pk_test_51InWuAAKNmSLq2ZCeW7npcDuqy6ra8c1QF11EF70nG4XsYJ7sffTPAm0pZLTyzd0qshIVTfI7mLcyVGsCNtHkQZg00qZzv0DW8"
)

interface props {
  handleSellCart: any
  productsDetail: IproductDetail[]
}

function CheckoutForm({ handleSellCart, productsDetail }: props): ReactElement {
  const stripe = useStripe()
  const elements = useElements()
  const history = useHistory()
  const token = localStorage.getItem("token")
  const userId = parseJwt(token).id

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    //persist stripe
    const token = localStorage.getItem("token")
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })

    //persist cart
    const totalPrice = await handleSellCart(paymentMethod.id)

    //update stock by product
    productsDetail.forEach((pd: IproductDetail) => {
      const product2Upd = { stock: pd.stock - pd.qty }
      console.log(
        "new stock for ",
        pd.productName,
        " is ",
        product2Upd.stock,
        "|",
        pd.stock,
        "-",
        pd.qty
      )
      persistEntity("products", product2Upd, pd.productId)
    })

    //validate
    if (!error) {
      try {
        const { data } = await axios.post(
          "http://hakhi.xyz:8000/checkout",
          {
            id: paymentMethod.id,
            amount: totalPrice.toFixed(2) * 100
          },
          {
            headers: {
              Authorization: "Bearer " + token
            }
          }
        )
        console.log("id of the transaction ", paymentMethod.id)

        console.log("dataStrapi ", data)
        //redirect
        history.push({ pathname: "/invoice", state: { data, productsDetail } })
      } catch (error) {
        console.log("error: ", error)
      }
    }

    //update cart
    downCart()

    //replace cart
    const customer = await findByField("customers", "user", userId, true, true)
    console.log("id", customer)
    const cart = {
      is_actual: true,
      customer: customer.id
    }
    const cartD = await persistEntity("carts", cart)
    //refresh cart
    localStorage.setItem("cart", cartD.id)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>
        Solo falta pagar, te enviaremos un comprobante a tu correo. Con toda la
        informacion de tu compra
      </p>
      <h4>Paga con VISA o MASTERCARD</h4>
      <hr />
      <CardElement className="inp" />
      <button>buy</button>
    </form>
  )
}

export function Card({ handleSellCart, productsDetail, setShowCard }: any) {
  useEffect(() => {
    console.log("iniciating")
    console.log(productsDetail)
  })
  return (
    <>
      <StylesCard>
        <Elements stripe={stripeP}>
          <CheckoutForm
            handleSellCart={handleSellCart}
            productsDetail={productsDetail}
          />
        </Elements>{" "}
      </StylesCard>
    </>
  )
}

const StylesCard = styled.div`
  .inp {
    padding: 0.5em 0;
  }
  button {
    width: 100%;
    padding: 0.5em;
    margin: 0.35em 0;
    border: 1px solid #bbb;
    border-radius: 0.25em;
    transition: 0.5s ease all;
    font-weight: 700;
  }
  button:hover {
    background: #444;
    color: #eee;
  }
`
