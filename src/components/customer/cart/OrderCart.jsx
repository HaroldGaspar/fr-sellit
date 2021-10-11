import ProductContext from "context/ProductsDtContex"
import { Suspense, useState } from "react"
import { useContext, useEffect } from "react"
import { InvoiceDetail } from "components"
import { ProductCart } from "components"

import "./Order.css"

export function OrderCart() {
  const { productsDetail, setProductsDetail } = useContext(ProductContext)
  const [price, setPrice] = useState()
  const showPrice = () => {
    const price = productsDetail
      .map((p) => p.totalPrice)
      .reduce((p, n) => p + n)
    // console.log(productsDetail.map((p) => p.totalPrice))
    setPrice(price)
  }
  return (
    <>
      <h2>Estas comprando</h2>
      {productsDetail.map((productDetail, id) => (
        <InvoiceDetail
          productDetail={productDetail}
          setProductsDetail={setProductsDetail}
          key={id}
        />
      ))}
      <div className="tt">
        Total a pagar:
        <b>
          {productsDetail.length === 0
            ? "0"
            : productsDetail.map((p) => p.totalPrice).reduce((p, n) => p + n)}
        </b>
      </div>
    </>
  )
}
