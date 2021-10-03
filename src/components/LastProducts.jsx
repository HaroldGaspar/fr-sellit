import React, { useEffect } from "react";
import { ProductHome } from ".";
import { getLatestProducts } from "../services";

export function LastProducts({ products, setProducts }) {
  useEffect(() => {
    getLatestProducts(products, setProducts);
  }, []);

  return (
    <>
      <h2>Ultimos Productos</h2>
      <div className=" row ">
        {products.map((product, id) => (
          <ProductHome product={product} key={id} />
        ))}
      </div>
    </>
  );
}
