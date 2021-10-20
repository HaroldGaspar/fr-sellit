import { persistEntity } from "services"

export function addReview(reviewObj) {
  const { stars, message, user, product } = reviewObj

  const totalStars = 0 //an adition of all stars
  const rating = (totalStars + stars) / countReviewsByProductId()

  const review = {
    rating,
    Coment: message,
    product,
    user
  }
  persistEntity("reviews", review)
}

function countReviewsByProductId() {
  return
}
