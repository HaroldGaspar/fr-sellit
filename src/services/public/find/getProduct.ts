import { Iproduct } from "models/Product"
import { Dispatch, SetStateAction } from "react"
import { API_URL } from "services/settings"
export async function getProduct(
  id: string,
  setactualProduct: Dispatch<SetStateAction<Iproduct>>,
  setloading: Dispatch<SetStateAction<boolean>>
) {
  if (id === null) return
  setloading(true)
  const resProduct = await fetch(`${API_URL}/products/${id}`)

  const resD = await resProduct.json()
  console.log("detail", resD)
  setloading(false)
  setactualProduct(resD)
}
