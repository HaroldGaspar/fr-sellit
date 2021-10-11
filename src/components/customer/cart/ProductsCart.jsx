import React, { useEffect, useContext } from "react"
import { Spinner, ProductCart } from "components"
import "./ProductsCart.css"
import { useCartProducts } from "hooks"

export function ProductsCart() {
  const { loading, productsDetail, setProductsDetail } = useCartProducts()

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        productsDetail.map((productDetail, id) => (
          <ProductCart
            productDetail={productDetail}
            productsDetail={productsDetail}
            setProductsDetail={setProductsDetail}
            key={id}
            id={id}
          />
        ))
      )}
    </>
  )
}
