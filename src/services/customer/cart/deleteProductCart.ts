import { IproductDetail } from "models/Product"
import { Dispatch, SetStateAction } from "react"
import { API_URL } from "services/settings"

export function deleteProductCart(
    id: number,
    products: IproductDetail[],
    setProducts: Dispatch<SetStateAction<IproductDetail[]>>
  ) {
    const pdsFiltered = products.filter((task) => task.productDetailId !== id)
    console.log("pdsFiltered",pdsFiltered)
    pdsFiltered.splice(id, 1)
    const token = localStorage.getItem("token")
  
    fetch(`${API_URL}/product-details/${id}`, {
      method: "delete",
      headers: new Headers({
        Authorization: `Bearer ${token}`
      })
    })
    setProducts(pdsFiltered)
  }
  