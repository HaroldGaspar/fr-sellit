import React from "react"

export default function Review({ id }) {
  return (
    <>
      <div className="review__card">
        <div className="review__starts">{id} stars</div>
        <div className="review__comment">comentario {id}</div>
      </div>
    </>
  )
}
