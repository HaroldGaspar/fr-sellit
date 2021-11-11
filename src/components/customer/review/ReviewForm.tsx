import { IReview } from "models/Product"
import React, { FormEvent, MutableRefObject, useRef, useState } from "react"
import { addReview } from "services/customer/reviews/addReview"
import styled from "styled-components"

export function ReviewForm({
  idProduct,
  reviewLength,
  pdRating,
  setProductDetail,
  productDetail,
  setReviews,
  reviews
}: props) {
  const starRef = useRef<HTMLInputElement>()
  const user: string = localStorage.getItem("user")
  const [review, setReview] = useState<IReview>({
    product: idProduct,
    pdRating,
    stars: 1,
    slug: user.split('"')[5]
  })

  const hdlChng = (e: any) => {
    const { name, value } = e.target
    setReview({ ...review, [name]: value })
  }
  const handleSubmit = (
    e: FormEvent<HTMLFormElement>,
    starRef: MutableRefObject<HTMLInputElement>
  ) => {
    e.preventDefault()
    setReview({ ...review })
    addReview(
      review,
      setReview,
      reviewLength,
      pdRating,
      setProductDetail,
      productDetail,
      reviews,
      setReviews
    )
    starRef.current.click()
  }
  return (
    <>
      <ReviewFormStyle>
        <h2>Comentar:</h2>
        <form onSubmit={(e) => handleSubmit(e, starRef)}>
          <label className="form__label">
            Estrellas:
            <StarClasification>
              <input
                id="radio1"
                type="radio"
                name="stars"
                value="5"
                onChange={(e) => hdlChng(e)}
              />
              <label htmlFor="radio1">★</label>
              <input
                id="radio2"
                type="radio"
                name="stars"
                value="4"
                onChange={(e) => hdlChng(e)}
              />
              <label htmlFor="radio2">★</label>
              <input
                id="radio3"
                type="radio"
                name="stars"
                value="3"
                onChange={(e) => hdlChng(e)}
              />
              <label htmlFor="radio3">★</label>
              <input
                id="radio4"
                type="radio"
                name="stars"
                value="2"
                onChange={(e) => hdlChng(e)}
              />
              <label htmlFor="radio4">★</label>
              <input
                id="radio5"
                type="radio"
                name="stars"
                value="1"
                ref={starRef}
                checked={true}
                onChange={(e) => hdlChng(e)}
              />
              <label htmlFor="radio5">★</label>
            </StarClasification>
          </label>
          <label className="form__label">
            Comentario:
            <textarea
              className="form__control"
              name="comment"
              onChange={(e) => hdlChng(e)}
              value={review.comment}
              required={true}
            ></textarea>
          </label>
          <button className="btn-comment">Comentar</button>
        </form>
      </ReviewFormStyle>
    </>
  )
}

const StarClasification = styled.p`
  direction: rtl;
  unicode-bidi: bidi-override;
  label:hover {
    color: orange;
  }
  label:hover ~ label {
    color: orange;
  }
  input[type="radio"]:checked ~ label {
    color: orange;
  }
  input[type="radio"] {
    display: none;
  }
  label {
    font-size: 20px;
    transition: 0.3s ease all;
  }
`
const ReviewFormStyle = styled.div`
  width: 350px;
  margin: 0.5em auto;
  padding: 1.5em 2em;
  border-radius: 0.25rem;
  border: 1px solid #dedede;

  @media (max-width: 700px) {
    width: 100%;
  }

  .btn-comment {
    border: none;
    background: #ededed;
    padding: 0.5em;
    width: 100%;
    font-weight: 700;
    border-radius: 0.25em;
    transition: 0.3s cubic-bezier(0.4, 0, 1, 1) all;
  }
  .btn-comment:hover {
    background: #6d6d6d;
    color: #ededed;
  }

  label {
    font-weight: 600;
  }
  .form__label {
    width: 100%;
  }
  .form__control {
    width: 100%;
    padding: 0.25rem 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
  .form__control:focus {
    outline-color: #aaa;
  }
`

interface props {
  idProduct: number
  reviewLength: number
  pdRating: number
  setProductDetail: any
  productDetail: any
  setReviews: any
  reviews: any
}
