import React, { useEffect, useState } from "react";
import { ProductCart } from ".";
import { getProduct, getProductsByCart } from "../services";

export function ProductsCart() {
  const [productsCart, setproductsCart] = useState([]);

  useEffect(() => {
    getProductsByCart(setproductsCart);
  }, []);
  return (
    <div className="">
      {productsCart.map((product) => (
        <ProductCart product={product} />
      ))}
    </div>
  );
}
