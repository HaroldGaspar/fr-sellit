import { API_URL } from "../settings"

export async function getProductsByStore() {
  const store = localStorage.getItem("store")

  const storeRes = await fetch(`${API_URL}/products?store=${store}`)
  const restD = await storeRes.json()
  const resFormat = restD.map((resU: any) => {
    return {
      id: resU.id,
      category: resU.category.id ? resU.category.id : 0,
      name: resU.name,
      mark: resU.mark,
      price: resU.price,
      description: resU.description,
      stock: resU.stock,
      photo: resU.photo
    }
  })
  return resFormat
}
