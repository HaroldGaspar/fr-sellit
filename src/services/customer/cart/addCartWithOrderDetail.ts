import { API_URL } from "services/settings"
export async function addCartWithOrderDetail(tp: number, pm: string) {
  const cart = localStorage.getItem("cart")
  const token = localStorage.getItem("token")
  const toUpd = {
    total_price: tp,
    pay_method: pm
  }
  console.log("sending to updt ", toUpd)
  const resFetch = await fetch(`${API_URL}/carts/${cart}`, {
    method: "put",
    headers: new Headers({
      Authorization: `Bearer ${token}`
    }),
    body: JSON.stringify(toUpd)
  })
  return resFetch
}