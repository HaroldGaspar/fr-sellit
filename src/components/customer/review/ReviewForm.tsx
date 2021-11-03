import InputProduct from "components/seller/seller-form/InputProduct"
import { IReview } from "models/Product"
import { Cardauth } from "pages/auth/styles"
import React, { FormEvent, FormEventHandler, useState } from "react"
import { addReview } from "services/customer/reviews/addReview"
import styled from "styled-components"

export function ReviewForm({
  idProduct,
  loading,
  reviewLength,
  pdRating
}: props) {
  const [review, setReview] = useState<IReview>({
    product: idProduct,
    pdRating
  })

  const handleIChange = (e: any) => {
    const { name, value } = e.target
    setReview({ ...review, [name]: value })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addReview(review, reviewLength, pdRating)
  }
  return (
    <>
      <Cardauth>
        <h2>Agregar Comentario</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className="form__label">
            Estrellas:
            <input
              onChange={(e) => handleIChange(e)}
              type="number"
              name="stars"
            />
          </label>
          <label className="form__label">
            Comentario:
            <textarea
              name="comment"
              onChange={(e) => handleIChange(e)}
            ></textarea>
          </label>
          <button>Comentar</button>
        </form>
      </Cardauth>
    </>
  )
}

interface props {
  idProduct: number
  loading: boolean
  reviewLength: number
  pdRating: number
}
