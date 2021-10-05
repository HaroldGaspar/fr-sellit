import { headerAuth } from "utils"

export const updateProduct = (
  e,
  props,
  product,
  setProduct,
  products,
  setProducts
) => {
  e.preventDefault()
  const newProduct = {
    category: product.category.id, //no soportaba un objeto
    name: product.name,
    mark: product.mark,
    price: product.price, //
    description: product.description,
    stock: product.stock //
  }

  fetch(`http://hakhi.xyz:8000/products/${product.id}`, {
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
  props.setshowUpdate(false)
  setProduct({
    ...props.product,
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
