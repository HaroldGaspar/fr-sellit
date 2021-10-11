import { Nav, ProductsCart, OrderCart } from "components"
import { ProductsDtContext } from "context"
import "./Cart.css"

export function Cart() {
  return (
    <>
      <Nav />

      <div className="cart__container">
        <div className="">
          <ProductsCart />
        </div>
        <div className="order">
          <OrderCart />
        </div>
      </div>
    </>
  )
}
