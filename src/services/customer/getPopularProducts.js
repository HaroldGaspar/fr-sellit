import { API_URL } from "../settings"
export async function getPopularProducts(setProducts, setloading) {
  setloading(true)
  const res = await fetch(`${API_URL}/products?_sort=rating:DESC&_limit=3`)
  const data = await res.json()
  setloading(false)
  setProducts(data)
  console.log("popular products", data)
}
