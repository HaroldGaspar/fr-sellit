//state

export const handleIChange = (e, product, setProduct) => {
  const { name, value } = e.target
  setProduct({ ...product, [name]: value })
  // if (!props.task.id)
  //     document.title= 'creating task'
}

export function handleEdit(id, props, products, setProduct) {
  const productFiltered = products.filter((product) => product.id === id)[0]
  setProduct(productFiltered)
  props.setshowUpdate(true)
  //ref
  props.productInput?.current?.focus() //?????????????????
}

export function disableEdit(props, setProduct) {
  setProduct({
    id: 0,
    category: "",
    name: "",
    mark: "",
    price: "",
    description: "",
    stock: ""
  })
  props.setshowUpdate(false)
  props.productInput?.current?.focus()
}
const token = localStorage.getItem("token")

export const headerAuthx = (token) => {
  return new Headers({
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  })
}

//===============================================

export const headerAuth = new Headers({
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json"
})

export const headerJson = new Headers({
  "Content-Type": "application/json"
})
