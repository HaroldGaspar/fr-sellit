import { API_URL } from "services/settings"

export async function updateProductDetail(pd) {
  const token = localStorage.getItem("token")
  const cart = localStorage.getItem("cart")

  const pdUpdated = {
    id: pd.productDetailId,
    qty: pd.qty,
    product: pd.productId,
    cart
  }
  const res = await fetch(`${API_URL}/product-details/${pd.productDetailId}`, {
    method: "put",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(pdUpdated)
  })
  const resD = await res.json()
  console.log("updated ", resD)
}
