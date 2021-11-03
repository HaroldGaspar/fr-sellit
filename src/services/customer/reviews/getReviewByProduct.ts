import { API_URL } from "services/settings"

export async function getReviewByProduct(
  id: number,
  setReviews: any
  // setloading: any
) {
  const review = await fetch(`${API_URL}/reviews?product=${id}`)
  const resD: any[] = await review.json()

  const resF = resD.filter((e) => e.product.id == id)
  const adap = resF.map((rev: any) => {
    return {
      comment: rev.Coment,
      stars: rev.stars,
      product: rev.product.id,
      customer: rev
    }
  })

  console.log("reviews", adap)
  // setloading(false)
  // return adap
  setReviews(adap)
}
