import ProductContext from "context/ProductsDtContex"
import { useContext, useEffect } from "react"
import { InvoiceDetail, Price } from "components"
import { addCartWithOrderDetail } from "services"

import "./Order.css"

export function OrderCart() {
  const { productsDetail, setProductsDetail } = useContext(ProductContext)

  const handleSellCart = async () => {
    const num =
      productsDetail.length === 0
        ? "0"
        : productsDetail.map((p) => p.totalPrice).reduce((p, n) => p + n)

    // const tp = parseFloat(num).toFixed(2)
    const res = await addCartWithOrderDetail(num, "credit_card")
    console.log("res updt cart to: ", res)
  }

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
          <button onClick={() => handleSellCart()} className="order__btn">
            Comprar ahora
          </button>
        </div>
      </div>
    </>
  )
}
