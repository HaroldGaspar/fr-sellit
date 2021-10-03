import React from "react";
import { addProductCart } from "../services";

export function ProductHome({ product }) {
  const handleEdit = () => {
    console.log("palcarro", product.id);
    addProductCart(product.id);
  };
  return (
    <div className="col-md-4 mt-2">
      <div className="card card-body">
        <h3>{product.name}</h3>
        <h6 className="text-right">{product.mark}</h6>

        <div className="row justify-content-between">
          <span className="col-6">stock: {product.stock}</span>
          <p className="col-4 pl-0 price">
            <span className="align-top currency">S/</span>
            {product.price}
          </p>
        </div>

        <button onClick={() => handleEdit()} className="btn btn-block btn-info">
          Añadir
        </button>
      </div>
    </div>
  );
}
