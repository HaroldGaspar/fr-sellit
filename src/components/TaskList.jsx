import React, { useEffect } from "react";
import "./styles.css";
import { ProductSeller } from ".";
import { getProductsByStore } from "../services";

export function TaskList(props) {
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
