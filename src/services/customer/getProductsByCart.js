export async function getProductsByCart(setproductsCart, setloading) {
  setloading(true)
  const cart = localStorage.getItem("cart")
  const token = localStorage.getItem("token")
  const resCartProduct = await fetch(`http://hakhi.xyz:8000/carts/${cart}`, {
    method: "get",
    headers: new Headers({
      Authorization: `Bearer ${token}`
    })
  })

  const resD = await resCartProduct.json()
  setloading(false)

  console.log("cart", resD.product_details)

  setproductsCart(resD.product_details)
}
