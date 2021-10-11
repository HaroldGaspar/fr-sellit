import { Nav, ProductsCart, OrderCart } from "components"
import { ProductsDtContext } from "context"
import "./Cart.css"

export function Cart() {
  return (
    <>
      <Nav />
      {/* <div className="container__h2">
        <h2 className="cart__h2">Carrito</h2>
        <span></span>
      </div> */}

      <div className="cart__container">
        <div className="cart__cardls">
          <h2 className="cart__h2">Carrito</h2>
          <ProductsCart />
        </div>
        <div className="order">
          <OrderCart />
        </div>
      </div>
    </>
  )
}
