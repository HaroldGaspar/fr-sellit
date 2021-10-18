import { Iproduct } from "models/Product"
import { Dispatch, SetStateAction } from "react"
import { API_URL } from "../settings"

/**
 * Send an delete http method by id,
 * Find and remove the product in the state
 * @param id of the product
 * @param products state
 * @param setProducts dispatch of the state
 */
export function deleteProduct(
  id: number,
  products: Iproduct[],
  setProducts: Dispatch<SetStateAction<Iproduct[]>>
) {
  const pdsFiltered = products.filter((task) => task.id !== id)
  pdsFiltered.splice(id, 1)
  const token = localStorage.getItem("token")

  fetch(`${API_URL}/products/${id}`, {
    method: "delete",
    headers: new Headers({
      Authorization: `Bearer ${token}`
    })
  })
  setProducts(pdsFiltered)
}
