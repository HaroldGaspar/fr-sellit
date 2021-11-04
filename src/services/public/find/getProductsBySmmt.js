import { API_URL } from "services/settings"

export async function getProductsBySmmt(
  entity,
  field,
  id,
  setProductsBySmmt,
  setLoading
) {
  setLoading(true)
  console.log("id", id)
  const productByStore = await fetch(`${API_URL}/${entity}?${field}=${id}`)
  const data = await productByStore.json()
  setProductsBySmmt(data)
  setLoading(false)
}
