import { IReview } from "models/Product"
import styled from "styled-components"
import Review from "./Review"

export function ReviewsList({
  reviews,
  reviewLength
}: {
  reviews: IReview[]
  reviewLength: number
}) {
  return (
    <ReviewListStyle>
      <h2> {reviewLength} Comentarios</h2>
      <div className="scroll">
        {reviews.map((review, i) => (
          <Review review={review} key={i} />
        ))}
      </div>
    </ReviewListStyle>
  )
}

const ReviewListStyle = styled.div`
  width: 350px;
  margin: 0.5em auto;
  padding: 1.5em 2em;
  border-radius: 0.25rem;
  border: 1px solid #dedede;
  background: #efefefef;

  @media (max-width: 700px) {
    width: 100%;
    .scroll {
      height: auto-fit;
    }
  }

  .scroll {
    height: 300px;
    overflow: auto;
  }
`
