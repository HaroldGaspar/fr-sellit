const { createContext, useState } = require("react")

const Context = createContext({})

export function ProductContextProvider({ children }) {
  const [product, setProduct] = useState({})

  return (
    <Context.Provider value={{ product, setProduct }} class>
      {children}
    </Context.Provider>
  )
}
export default Context
