import { API_URL } from "services/settings"
const cart = localStorage.getItem("cart")
const token = localStorage.getItem("token")

export async function downCart() {
    const resFetch = await fetch(`${API_URL}/carts/${cart}`, {
        method: "put",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({
            is_actual: false,
          })
      })
      return resFetch
}
