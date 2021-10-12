import { API_URL } from "services/settings"
export async function addCartWithOrderDetail(tp, pm) {
  const cart = localStorage.getItem("cart")
  const token = localStorage.getItem("token")
  const resFetch = await fetch(`${API_URL}/carts/${cart}`, {
    method: "post",
    headers: new Headers({
      Authorization: `Bearer ${token}`
    }),
    body: JSON.stringify({
      total_price: tp,
      pay_method: pm
    })
  })
}
