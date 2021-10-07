import ProductsContext from "context/ProductsContext"
import { useContext, useEffect, useState } from "react"
import { getLatestProducts } from "services"

const INITIAL_PAGE = 0

export function useLastestProducts() {
  //STATE HANDLER
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false) //new fx

  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)

  //LOGICA DF
  useEffect(() => {
    setLoading(true)

    getLatestProducts().then((products) => {
      setProducts(products)
      setLoading(false)
    })
  }, [setProducts, setLoading])

  //PAGINATION
  useEffect(() => {
    if (page === INITIAL_PAGE) return //abort
    setLoadingNextPage(true)

    getLatestProducts(page).then((nextProducts) => {
      setProducts((prevProducts) => prevProducts.concat(nextProducts))
      setLoadingNextPage(false)
      console.log("setting", products)
    })
  }, [page, setProducts])

  //RESULTS
  return { loading, products, setPage, loadingNextPage }
}
