import { IReview } from "models/Product"
import { persistEntity } from "services"
const token = localStorage.getItem("token")

export function addReview(
  reviewObj: IReview,
  reviewLength: number,
  pdRating: number
) {
  const { stars, comment, product } = reviewObj
  console.log("reviewLength", reviewObj)

  const totalStars: number = parseInt(pdRating.toString()) //an adition of all stars
  const stars2add: number = parseInt(stars.toString())
  const newsstars = totalStars + stars2add
  const rating = newsstars / (reviewLength + 1)

  const review = {
    rating,
    Coment: comment,
    product,
    user: JSON.parse(atob(token.split(".")[1])).id
  }
  console.log("persiting: ", review)
  // persistEntity("reviews", review)
}
