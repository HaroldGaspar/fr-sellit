import React, { useEffect, useContext } from "react"
import { Spinner, ProductCart } from "components"
import "./ProductsCart.css"
import { useCartProducts } from "hooks"
import { updateProductDetail } from "services"

export function ProductsCart() {
  const { loading, productsDetail, setProductsDetail } = useCartProducts()

  // With dependency productsDetail exec every change
  // Without dont consider hook going it  empty

  // useEffect(() => {
  //   //
  //   return () => {
  //     console.log("====order==send cart-details updated", productsDetail)
  //     productsDetail.map((p) => {
  //       updateProductDetail(p)
  //     })
  //   }
  // }, [])

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
