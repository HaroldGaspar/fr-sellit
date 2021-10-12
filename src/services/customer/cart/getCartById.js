// import { API_URL } from "services/settings"
// export async function getCartById(setproductsCart, setloading) {
//   setloading(true)
//   const cart = localStorage.getItem("cart")
//   const token = localStorage.getItem("token")
//   const resFetch = await fetch(
//     `${API_URL}/carts/${cart}?_sort=published_at:DESC`,
//     {
//       method: "get",
//       headers: new Headers({
//         Authorization: `Bearer ${token}`
//       })
//     }
//   )

//   const resD = await resFetch.json()
//   setloading(false)
//   console.log("cart", resD.product_details)

//   setproductsCart(resD)
// }
