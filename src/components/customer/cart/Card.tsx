import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from "@stripe/react-stripe-js"
import { loadStripe, Stripe } from "@stripe/stripe-js"
import axios from "axios"
import React, { FormEvent, ReactElement } from "react"

const stripeP: Promise<Stripe> = loadStripe(
  "pk_test_51InWuAAKNmSLq2ZCeW7npcDuqy6ra8c1QF11EF70nG4XsYJ7sffTPAm0pZLTyzd0qshIVTfI7mLcyVGsCNtHkQZg00qZzv0DW8"
)

function CheckoutForm(): ReactElement {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const token = localStorage.getItem("token")
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })

    //validate
    if (!error) {
      try {
        const data = await axios.post(
          "http://localhost:8000/checkout",
          {
            id: paymentMethod.id,
            amount: 100
          },
          {
            headers: {
              Authorization: "Bearer " + token
            }
          }
        )
        console.log("id of the transaction ", paymentMethod.id)
        console.log("data ", data)
      } catch (error) {
        console.log("error: ", error)
      }
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <CardElement />

      <button>buy</button>
    </form>
  )
}

export function Card() {
  return (
    <>
      <div className="card card-body">
        <Elements stripe={stripeP}>
          <CheckoutForm />
        </Elements>
      </div>
    </>
  )
}
