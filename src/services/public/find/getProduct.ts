import { Iproduct } from "models/Product"
import { Dispatch, SetStateAction } from "react"
import { API_URL } from "services/settings"
export async function getProduct(
  id: string,
  setactualProduct: Dispatch<SetStateAction<Iproduct>>,
  setloading?: Dispatch<SetStateAction<boolean>>
) {
  if (id === null) return
  const resProduct = await fetch(`${API_URL}/products/${id}`)

  let resD = await resProduct.json()
  resD = {
    ...resD,
    storeName: resD.store.name,
    storeId: resD.store.id,
    rating: resD.rating | 0,
    categoryName: resD.category.name,
    category: resD.category.id
  }
  console.log("detail", resD)
  setactualProduct(resD)
  if (setloading) setloading(false)
}
