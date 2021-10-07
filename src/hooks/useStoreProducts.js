import ProductsContext from "context/ProductsContext"
import { useContext, useEffect, useState } from "react"
// import { useState } from "react/cjs/react.development"
import { getProductsByStore } from "services"

// const INITIAL_PAGE = 0

export function useStoreProducts() {
  //STATE HANDLER
  // const [ products, setProducts ] = useContext(ProductsContext)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false) //new fx
  //   const [page, setPage] = useState(INITIAL_PAGE)

  //LOGICA
  useEffect(() => {
    setLoading(true)

    getProductsByStore().then((products) => {
      setProducts(products)
      setLoading(false)
    })
  }, [setProducts])

  //RESULTS
  return { loading, products, setProducts }
}
