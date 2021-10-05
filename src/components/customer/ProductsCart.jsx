import React, { useEffect, useState } from "react"
import { ProductCart } from "components"
import { getProduct, getProductsByCart } from "services"

export function ProductsCart() {
  const [productsCart, setproductsCart] = useState([])

  useEffect(() => {
    getProductsByCart(setproductsCart)
  }, [])
  return (
    <div className="">
      {productsCart.map((productDetail) => (
        <ProductCart productDetail={productDetail} />
      ))}
    </div>
  )
}
