import ProductsContext from "context/ProductsContext"
import { useContext, useEffect } from "react"
import { useState } from "react/cjs/react.development"
import { getLatestProducts } from "services"

// const INITIAL_PAGE = 0

export function useLastestProducts() {
  //STATE HANDLER
  const { products, setProducts } = useContext(ProductsContext)
  const [loading, setLoading] = useState(false) //new fx
  //   const [page, setPage] = useState(INITIAL_PAGE)

  //LOGICA
  useEffect(() => {
    setLoading(true)

    getLatestProducts().then((products) => {
      setProducts(products)
      setLoading(false)
    })
  }, [setProducts])

  //RESULTS
  return { loading, products }
}
