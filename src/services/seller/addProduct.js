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
    category: product.category,
    name: product.name,
    mark: product.mark,
    price: product.price | 0,
    stock: product.stock | 0,
    description: product.description,
    store: localStorage.getItem("store")
  }

  //persisten
  const token = localStorage.getItem("token")

  fetch("http://hakhi.xyz:8000/products", {
    method: "post",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(newProduct)
  }).catch((e) => console.log(e))
  setProducts([...products, newProduct])
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
