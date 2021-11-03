import { IReview } from "models/Product"
import { Cardauth } from "pages/auth/styles"
import React, { useEffect, useState } from "react"
import Review from "./Review"

export function ReviewsList({
  reviews,
  reviewLength
}: {
  reviews: IReview[]
  reviewLength: number
}) {
  return (
    <>
      <Cardauth>
        <h2> {reviewLength} Comentarios</h2>
        {reviews.map((review) => (
          <Review review={review} />
        ))}
      </Cardauth>
    </>
  )
}
