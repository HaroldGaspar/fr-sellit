import { API_URL } from "services/settings"
export async function addProductCart(product) {
  const cart = localStorage.getItem("cart")
  const token = localStorage.getItem("token")

  fetch(`${API_URL}/product-details`, {
    method: "post",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      cart,
      qty: 1,
      product
    })
  })
}
