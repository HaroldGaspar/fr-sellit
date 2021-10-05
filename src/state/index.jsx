import { useState } from "react"

// export const useProducts = () => {
//   const [products, setProducts] = useState([])

//   return { products, setProducts }
// }

//Se define el estado inicial de product para el uso en el formulario
export const useProduct = () => {
  const [product, setProduct] = useState({
    // id: 0,
    category: 0,
    name: "",
    mark: "",
    price: 0,
    description: "",
    stock: 0
  })

  return { product, setProduct }
}

export const useShowUpdate = () => {
  const [showUpdate, setshowUpdate] = useState(false)
  return { showUpdate, setshowUpdate }
}
