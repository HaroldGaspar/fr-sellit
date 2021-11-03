import { IReview } from "models/Product"
import { Cardauth } from "pages/auth/styles"
import React, { useEffect, useState } from "react"
import { getReviewByProduct } from "services/customer/reviews/getReviewByProduct"
import Review from "./Review"

export function ReviewsList({ reviews }: { reviews: IReview[] }) {
  return (
    <>
      <Cardauth>
        <h2>Comentarios</h2>
        {[1, 2, 3].map((e) => (
          <Review key={e} id={e} />
        ))}
      </Cardauth>
    </>
  )
}
