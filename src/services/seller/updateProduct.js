import { API_URL } from "../settings"
import { headerAuth } from "utils"

export const updateProduct = (
  e,
  product,
  setProduct,
  products,
  setProducts,
  productInput,
  setshowUpdate
) => {
  e.preventDefault()
  const newProduct = {
    category: product.category?.id, //no soportaba un objeto
    name: product.name,
    mark: product.mark,
    price: product.price, //
    description: product.description,
    stock: product.stock //
  }

  fetch(`${API_URL}/products/${product.id}`, {
    method: "put",
    headers: headerAuth,
    body: JSON.stringify(newProduct)
  })
    .then(() => console.log("FETCH updated"))
    .catch((e) => console.log("err ", e))

  //render list
  console.log("new product", product)
  const productsEdited = [...products]
  const productFiltered = products.findIndex((p) => p.id === product.id)
  productsEdited[productFiltered] = newProduct
  setProducts(productsEdited)

  //form
  // console.log("updated index", productFiltered, "=>", productsEdited)
  setshowUpdate(false)
  setProduct({
    ...product,
    category: "",
    name: "",
    mark: "",
    price: "",
    description: "",
    stock: ""
  })
  //ref
  productInput?.current?.focus()
}
