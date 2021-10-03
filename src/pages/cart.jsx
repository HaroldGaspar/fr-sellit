import React from "react";
import { Nav, ProductsCart } from "../components";
import OrderCart from "../components/OrderCart";

export function Cart() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ProductsCart />
          </div>
          <div className="col-md-6">
            <OrderCart />
          </div>
        </div>
      </div>
    </>
  );
}
