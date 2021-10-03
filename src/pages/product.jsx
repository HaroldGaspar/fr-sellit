import React, { useRef } from "react";
import {
  TaskForm,
  TaskList,
  Nav,
  ProductForm,
  ProductList,
} from "../components";
import { useShowUpdate, useProduct, useProducts } from "../state";

export function Product() {
  const productInput = useRef();

  const { products, setProducts } = useProducts();
  const { product, setProduct } = useProduct();
  const { showUpdate, setshowUpdate } = useShowUpdate();
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ProductForm
              products={products}
              setProducts={setProducts}
              product={product}
              setProduct={setProduct}
              productInput={productInput}
              showUpdate={showUpdate}
              setshowUpdate={setshowUpdate}
            />
          </div>
          <div className="col-md-8">
            <div className="row">
              {/* <div className="col-md-8"> */}
              <ProductList
                products={products}
                setProducts={setProducts}
                product={product}
                setProduct={setProduct}
                showUpdate={showUpdate}
                setshowUpdate={setshowUpdate}
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
