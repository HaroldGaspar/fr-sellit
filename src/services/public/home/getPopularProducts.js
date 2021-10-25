import axios from "axios"
import { API_URL } from "services/settings"

export async function getPopularProducts(setProducts, setloading) {
  // const resT = await axios.get("http://api_host:8000/products")
  //   console.log("ttttt", resT)

  setloading(true)
  const res = await fetch(`${API_URL}/products?_sort=rating:DESC&_limit=8`)
  const data = await res.json()
  setloading(false)
  setProducts(data)
  console.log("popular products", data)
  
}
