import { API_URL } from "services/settings"
export async function addCartWithOrderDetail(
  tp: number,
  pm: string,
  idTransaccion: string
) {
  const cart = localStorage.getItem("cart")
  const token = localStorage.getItem("token")
  const toUpd = {
    total_price: tp,
    pay_method: pm,
    transaction: idTransaccion
  }
  console.log("sending to updt ", toUpd)

  const resFetch = await fetch(`${API_URL}/carts/${cart}`, {
    method: "put",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(toUpd)
  })
  return resFetch
}
