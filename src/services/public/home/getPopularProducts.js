import axios from "axios"
import { API_URL } from "services/settings"

export async function getPopularProducts(setProducts, setloading) {
  // const resT = await axios.get("http://api_host:8000/products")
  //   console.log("ttttt", resT)

  setloading(true)
  // const res = await fetch(`${API_URL}/products?_sort=rating:DESC&_limit=8`)
  const res = await fetch(
    `${API_URL}/products?_sort=created_at:DESC&_limit=100`
  )
  const data = await res.json()

  const ratingFx = data
    .map((p) => {
      const stars = p.reviews.length ? p.rating / p.reviews.length : 0
      return { ...p, rating: stars }
    })
    .sort(compare)

  setloading(false)
  setProducts(ratingFx)
  console.log("popular products", ratingFx.slice(0, 8))
}

function compare(a, b) {
  if (a.rating > b.rating) {
    return -1
  }
  if (a.rating < b.rating) {
    return 1
  }
  return 0
}
