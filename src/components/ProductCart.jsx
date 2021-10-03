import React, { useEffect, useState } from "react";
import { getProduct } from "../services";

export function ProductCart({ product }) {
  const [productDetail, setproductDetail] = useState({});

  useEffect(() => {
    getProduct(product.id, setproductDetail);
  }, []);
  return (
    <>
      <div className="card">
        <p>{productDetail.name}</p>
        <p>{productDetail.price}</p>
        <p>{product.qty}</p>
      </div>
    </>
  );
}
