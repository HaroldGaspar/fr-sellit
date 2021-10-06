import React, { useEffect, useState } from "react"
import { ProductCart } from "components"
import { getProduct, getProductsByCart } from "services"
import { Spinner } from "components/Spinner"

export function ProductsCart() {
  const [productsCart, setproductsCart] = useState([])
  const [loading, setloading] = useState()

  useEffect(() => {
    getProductsByCart(setproductsCart, setloading)
  }, [])
  return (
    <div className="">
      {loading ? (
        <Spinner />
      ) : (
        productsCart.map((productDetail, id) => (
          <ProductCart productDetail={productDetail} key={id} />
        ))
      )}
    </div>
  )
}
