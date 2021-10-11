import ProductContext from "context/ProductsDtContex"
import { useContext } from "react"
import { InvoiceDetail } from "components"

import "./Order.css"
import { Price } from "../Price"

export function OrderCart() {
  const { productsDetail, setProductsDetail } = useContext(ProductContext)
  console.log("lengt", productsDetail.length)
  return (
    <>
      <div className="invoicecart">
        <h2 className="order__title">Estas comprando</h2>
        <div className="order__invoicels">
          {productsDetail.map((productDetail, id) => (
            <InvoiceDetail
              productDetail={productDetail}
              setProductsDetail={setProductsDetail}
              key={id}
            />
          ))}
        </div>
        <div className="tt">
          Total a pagar:
          <Price
            price={
              productsDetail.length === 0
                ? "0"
                : productsDetail
                    .map((p) => p.totalPrice)
                    .reduce((p, n) => p + n)
            }
          />
          <button className="order__btn">Comprar ahora</button>
        </div>
      </div>
    </>
  )
}
