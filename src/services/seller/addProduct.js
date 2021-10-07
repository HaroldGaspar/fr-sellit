import { API_URL } from "../settings"

export const addProduct = (
  e,
  props,
  product,
  setProduct,
  products,
  setProducts
) => {
  e.preventDefault()
  console.log("saving ", product)

  const newProduct = {
    // id: getCurrentTimeStamp(),
    category: product.category | 0,
    name: product.name,
    mark: product.mark,
    price: product.price | 0,
    stock: product.stock | 0,
    description: product.description,
    store: localStorage.getItem("store")
  }

  //persisten
  const token = localStorage.getItem("token")

  fetch(`${API_URL}/products`, {
    method: "post",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(newProduct)
  }).catch((e) => console.log(e))
  // setProducts([...products, newProduct])
  setProducts((prevProducts) => prevProducts.concat(newProduct))
  //format
  setProduct({
    category: "",
    name: "",
    mark: "",
    price: "",
    description: "",
    stock: ""
  })
  //ref
  props.productInput?.current?.focus()
}
