import { Iproduct } from "models/Product"
import { Dispatch, SetStateAction } from "react"
import { getReviewByProduct } from "services/customer/reviews/getReviewByProduct"
import { API_URL } from "services/settings"
export async function getProduct(
  id: string,
  setactualProduct: Dispatch<SetStateAction<Iproduct>>,
  setloading: Dispatch<SetStateAction<boolean>>,
  setReviews?: Dispatch<SetStateAction<any>>
) {
  if (id === null) return
  setloading(true)
  const resProduct = await fetch(`${API_URL}/products/${id}`)

  const resD = await resProduct.json()
  console.log("detail", resD)
  setactualProduct(resD)
  setloading(false)
  if (setReviews) setReviews(getReviewByProduct(resD.id))
}
