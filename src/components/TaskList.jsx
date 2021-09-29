import React from "react";
import { handleEdit } from "../utils";
import { deleteProduct } from "../services";
import "./styles.css";

export function TaskList(props) {
  return (
    <>
      {props.products.map((product) => (
        <div className="col-md-4 mt-2" key={product.id}>
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

            <button
              onClick={() => handleEdit(product.id, props)}
              className="btn btn-block btn-info"
            >
              Edit
            </button>
            <button
              onClick={() =>
                deleteProduct(product.id, props.products, props.setProducts)
              }
              className="btn btn-block btn-outline-danger"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
