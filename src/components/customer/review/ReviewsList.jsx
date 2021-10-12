import React from "react"
import Review from "./Review"

export function ReviewsList() {
  return (
    <>
      <h2>Comentarios</h2>
      {[1, 2, 3].map((e) => (
        <Review key={e} id={e} />
      ))}
    </>
  )
}
