import React, { useEffect, useState } from "react";
import { getProduct } from "../services";

export function ProductCart({ productDetail }) {
  const [actualProduct, setactualProduct] = useState({});

  useEffect(() => {
    getProduct(productDetail.product, setactualProduct);
  }, []);
  return (
    <>
      <div className="card">
        <p>{actualProduct.name}</p>
        <p>{actualProduct.price}</p>
        <p>{productDetail.qty}</p>
      </div>
    </>
  );
}
