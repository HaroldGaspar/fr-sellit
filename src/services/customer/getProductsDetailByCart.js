import { API_URL } from "../settings"
export async function getProductsDetailByCart(setState) {
  const cart = localStorage.getItem("cart")
  const token = localStorage.getItem("token")
  const resFetch = await fetch(
    `${API_URL}/product-details?cart=${cart}?_sort=created_at:ASC`,
    {
      method: "get",
      headers: new Headers({
        Authorization: `Bearer ${token}`
      })
    }
  )

  const resD = await resFetch.json()

  //adapter
  let resFormat = resD.map((resU) => {
    return {
      qty: resU.qty,
      productPrice: resU.product.price,
      totalPrice: resU.product.price,
      productDetailId: resU.id,
      productId: resU.product.id,
      mark: resU.product.mark,
      productName: resU.product.name,
      photo: resU.product.photo
    }
  })

  console.log("this cart have ", resD.length, "products")
  console.log("res format", resFormat)

  return resFormat
}
