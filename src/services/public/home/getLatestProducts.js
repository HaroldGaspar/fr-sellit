import { API_URL } from "services/settings"
const limit = 6

export async function getLatestProducts(page = 0) {
  const url = `${API_URL}/products?_sort=created_at:DESC&_limit=${limit}&_start=${
    page * limit
  }`
  const latestRes = await fetch(url)
  return await latestRes.json()
}
