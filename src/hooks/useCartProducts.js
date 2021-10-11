import ProductContext from "context/ProductsDtContex"
import { useContext, useEffect, useState } from "react"
import { getProductsDetailByCart } from "services"

export function useCartProducts() {
  const { productsDetail, setProductsDetail } = useContext(ProductContext)
  const [loading, setloading] = useState()

  useEffect(() => {
    setloading(true)
    getProductsDetailByCart().then((pd) => {
      setProductsDetail(pd)
      setloading(false)
    })
  }, [setProductsDetail])

  return { loading, productsDetail, setProductsDetail }
}