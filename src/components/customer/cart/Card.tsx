import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from "@stripe/react-stripe-js"
import { loadStripe, Stripe } from "@stripe/stripe-js"
import axios from "axios"
import React, { FormEvent, ReactElement, useEffect } from "react"
import { useHistory } from "react-router"
import { downCart, findByField, parseJwt, persistEntity } from "services"

const stripeP: Promise<Stripe> = loadStripe(
  "pk_test_51InWuAAKNmSLq2ZCeW7npcDuqy6ra8c1QF11EF70nG4XsYJ7sffTPAm0pZLTyzd0qshIVTfI7mLcyVGsCNtHkQZg00qZzv0DW8"
)

function CheckoutForm({ handleSellCart, productsDetail }: any): ReactElement {
  const stripe = useStripe()
  const elements = useElements()
  const history = useHistory()
  const token = localStorage.getItem("token")
  const userId = parseJwt(token).id

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    //persist cart
    const totalPrice = await handleSellCart()

    //persist stripe
    const token = localStorage.getItem("token")
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
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
    const customer = await findByField("customers", "user", userId, token)
    console.log("id", customer)
    const cart = {
      is_actual: true,
      customer: customer[0].id
    }
    const cartD = await persistEntity("carts", cart)
    //refresh cart
    localStorage.setItem("cart", cartD.id)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <CardElement />

      <button>buy</button>
    </form>
  )
}

export function Card({ handleSellCart, productsDetail }: any) {
  useEffect(() => {
    console.log("iniciating")
    console.log(productsDetail)
  })
  return (
    <>
      <div className="card card-body">
        <Elements stripe={stripeP}>
          <CheckoutForm
            handleSellCart={handleSellCart}
            productsDetail={productsDetail}
          />
        </Elements>
      </div>
    </>
  )
}
