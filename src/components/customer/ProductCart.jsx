import { Spinner } from "components/Spinner"
import React, { useEffect, useState } from "react"
import { getProduct } from "services"
import "./ProductCart.css"

export function ProductCart({ productDetail }) {
  const [actualProduct, setactualProduct] = useState({})
  const [loading, setloading] = useState()

  useEffect(() => {
    getProduct(productDetail.product, setactualProduct, setloading)
  }, [])
  return (
    <>
      {/* {loading ? (
        <Spinner />
      ) : ( */}
      <div className="card product-cart">
        <p>{actualProduct.name}</p>
        <p>{actualProduct.price}</p>
        <p>{productDetail.qty}</p>
      </div>
      {/* )} */}
    </>
  )
}
