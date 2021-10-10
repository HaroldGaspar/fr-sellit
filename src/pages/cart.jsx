import React, { useState } from "react"
import { Nav, ProductsCart, OrderCart } from "components"
import { ProductsDtContext } from "context"
import "./Cart.css"
export function Cart() {
  return (
    //{qty, totalPrice, product.id, product.name}
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
