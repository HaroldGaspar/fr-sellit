const { createContext, useState } = require("react")

const ProductContext = createContext({})

export function ProductsDtContextProvider({ children }) {
  const [productsDetail, setProductsDetail] = useState([])

  return (
    <ProductContext.Provider value={{ productsDetail, setProductsDetail }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductContext
