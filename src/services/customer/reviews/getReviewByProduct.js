import { API_URL } from "services/settings"

export async function getReviewByProduct(id) {
  const review = await fetch(`${API_URL}/reviews?product=${id}`)
  const resD = await review.json()
  console.log("reviews", resD)
}
