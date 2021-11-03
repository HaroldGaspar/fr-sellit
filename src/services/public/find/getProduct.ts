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
  const resProduct = await fetch(`${API_URL}/products/${id}`)

  let resD = await resProduct.json()
  resD = {
    ...resD,
    storeName: resD.store.name,
    storeId: resD.store.id,
    rating: resD.rating | 0
  }
  console.log("detail", resD)
  setactualProduct(resD)
}
