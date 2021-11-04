import React from "react"
import styled from "styled-components"

export default function Review({ review }) {
  return (
    <>
      <ReviewCard>
        <div className="review__starts">
          <div className="card__subtitle">
            <span className="card__mark">{}</span>
            <div className="card__stars">{"★".repeat(review.stars)}</div>
            <div className="card__nostars">{"★".repeat(5 - review.stars)}</div>
          </div>
        </div>
        <div className="review__comment"> {review.comment} </div>
      </ReviewCard>
    </>
  )
}

const ReviewCard = styled.div`
  // display: flex;
  background: #fafafafa;
  border-radius: 0.15em;
  margin: 0.25em 0;
  padding: 0.3em 0.5em;
`
