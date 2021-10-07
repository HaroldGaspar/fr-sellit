import { API_URL } from "../settings"
export async function getProduct(id, setactualProduct, setloading) {
  if (id === null) return
  setloading(true)
  const resProduct = await fetch(`${API_URL}/products/${id}`)

  const resD = await resProduct.json()
  console.log("detail", resD)
  setloading(false)
  setactualProduct(resD)
}
