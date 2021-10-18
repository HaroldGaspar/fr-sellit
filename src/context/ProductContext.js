const { createContext, useState } = require("react")

const Context = createContext({})

export function ProductContextProvider({ children }) {
  const [product, setProduct] = useState({
    category: 0,
    name: "",
    mark: "",
    price: 0.0,
    description: "",
    stock: 0,
    photo: ""
  })
  const [showUpdate, setshowUpdate] = useState()
  const [dfProduct, setDfProduct] = useState({})

  return (
    <Context.Provider
      value={{
        product,
        setProduct,
        showUpdate,
        setshowUpdate,
        dfProduct,
        setDfProduct
      }}
    >
      {children}
    </Context.Provider>
  )
}
export default Context
