//state

export const handleIChange = (e, props) => {
  const { name, value } = e.target
  props.setProduct({ ...props.product, [name]: value })
  // if (!props.task.id)
  //     document.title= 'creating task'
}

export function handleEdit(id, props) {
  const productFiltered = props.products.filter(
    (product) => product.id === id
  )[0]
  props.setProduct(productFiltered)
  props.setshowUpdate(true)
  //ref
  props.productInput?.current?.focus() //?????????????????
}

export function disableEdit(props) {
  props.setProduct({
    id: 0,
    category: "",
    name: "",
    mark: "",
    price: "",
    description: "",
    stock: "",
    completed: false
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

export const headerAuth = new Headers({
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json"
})

export const headerJson = new Headers({
  "Content-Type": "application/json"
})
