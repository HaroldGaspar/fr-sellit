import { IReview } from "models/Product"
import { persistEntity } from "services"
import { API_URL } from "services/settings"
const token = localStorage.getItem("token")

export function addReview(
  reviewObj: IReview,
  reviewLength: number,
  pdRating: number,
  setProductDetail: any,
  productDetail: any,
  reviews: any,
  setReviews: any
) {
  const { stars, comment, product } = reviewObj
  console.log("reviewLength", reviewLength)

  //PERSIST REVIEW
  const review = {
    stars,
    Coment: comment,
    product,
    customer: JSON.parse(atob(token.split(".")[1])).id
  }
  persistEntity("reviews", review)
  setReviews([...reviews, reviewObj])

  //UPDATE PRODUCT RATING
  const newsstars = pdRating + parseInt(stars.toString()) //totalStars + stars2add
  updateProduct("products", product, newsstars)

  //CHANGE STARS IN COMPONENT: totalstars / reviewsQuantity
  setProductDetail({ ...productDetail, rating: newsstars })
  console.log("new product rating: ", newsstars)
}

async function updateProduct(entitiy: any, id: number, newRating: number) {
  await fetch(`${API_URL}/${entitiy}/${id}`, {
    method: "put",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }),
    body: JSON.stringify({ rating: newRating })
  })
}
