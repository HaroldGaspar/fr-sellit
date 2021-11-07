import { API_URL } from "services/settings"
export async function getProductsDetailByCart(setState: any) {
  const cart = localStorage.getItem("cart")
  if (!cart) return
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

  const resD: any[] = await resFetch.json()

  //adapter
  const resFormat = resD.map((resU) => {
    return {
      qty: resU.qty,
      productPrice: resU.product.price,
      totalPrice: resU.product.price * resU.qty,
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
