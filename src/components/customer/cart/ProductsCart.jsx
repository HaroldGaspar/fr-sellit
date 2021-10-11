import React, { useEffect, useContext } from "react"
import { ProductCart } from "components"
import { Spinner } from "components"
import "./ProductsCart.css"
import { useCartProducts } from "hooks"

export function ProductsCart() {
  const { loading, productsDetail, setProductsDetail } = useCartProducts()

  return (
    <>
      <h2 className="cart__h2">Carrito</h2>
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
