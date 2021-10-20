import { API_URL } from "services/settings"

export async function searchProduct(keyword, setProducts) {
  //   setloading(true)
  const resProducts = await fetch(`${API_URL}/products?_q=${keyword}`)

  const resD = await resProducts.json()
  console.log("search ", resD)
  setProducts(resD)
  // setloading(false)
}
