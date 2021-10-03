import React, { useEffect } from "react";
import { ProductSeller } from ".";
import { getProductsByStore } from "../services";

export function ProductList(props) {
  useEffect(() => {
    getProductsByStore(props.setProducts);
  }, []);

  return (
    <>
      {props.products.map((product) => (
        <ProductSeller product={product} props={props} />
      ))}
    </>
  );
}
