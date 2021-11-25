import { findByField, getByField } from "services"
import { API_URL } from "services/settings"

export async function getReviewByProduct(id: string, setReviews: any) {
  const reviews = await findByField("reviews", "product", id, false, false)

  const filter = reviews.filter((e: any) => e.product.id === parseInt(id))
  const adap: any[] = filter.map((rev: any) => {
    return {
      comment: rev.Coment,
      stars: rev.stars,
      product: rev.product.id,
      customer: rev, //will replace slug
      slug: rev.slug
    }
  })

  console.log("reviews mapped", adap)
  setReviews(adap)
}
