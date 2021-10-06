export async function getPopularProducts(setProducts, setloading) {
  setloading(true)
  const URI = process.env
  console.log("URI", URI)
  const res = await fetch(
    `http://hakhi.xyz:8000/products?_sort=rating:DESC&_limit=3`
  )
  const data = await res.json()
  setloading(false)
  setProducts(data)
  console.log("popular products", data)
}
