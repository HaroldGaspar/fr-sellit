import React from "react"
import { ReviewForm } from "../review/ReviewForm"
import { ReviewsList } from "../review/ReviewsList"

export function ProductDetail() {
  return (
    <>
      <div className="productdetail">
        <h2 className="productdetail__title">Detail of product</h2>
        <div className="productdetail__img">product photo</div>
        <div className="productdetail__name">name</div>
      </div>
      <div className="productreview">
        <ReviewsList />
        <ReviewForm />
      </div>
    </>
  )
}
