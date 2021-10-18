import { API_URL } from "../settings"
export async function getProductsByStore() {
  const store = localStorage.getItem("store")

  const storeRes = await fetch(`${API_URL}/products?store=${store}`)
  return await storeRes.json()
}
