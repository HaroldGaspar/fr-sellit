import { API_URL } from "services/settings"
import React from "react"
import { Link } from "react-router-dom"
import { addProductCart } from "services"
import "./ProductHome.css"
function ProductHome({ product }) {
  const handleEdit = () => {
    console.log("palcarro", product.id)
    addProductCart(product.id)
  }
  return (
    <>
      <div className="card card-body">
        <Link to={`/product/${product.id}`} className="Product-link">
          <div className="card">
            <img
              src={API_URL + product.photo}
              alt=""
              height="120"
              loading={"lazy"}
              className="img-fluid"
            />
          </div>
        </Link>
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
    </>
  )
}
export default React.memo(ProductHome)
