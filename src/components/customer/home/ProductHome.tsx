import { API_URL } from "services/settings"
import React from "react"
import { Link } from "react-router-dom"
import { addProductCart } from "services"
import "./ProductHome.css"
import { Price } from "components"
import { Iproduct } from "models/Product"
function ProductHome({ product }: { product: Iproduct }) {
  const handleEdit = () => {
    addProductCart(product.id)
  }
  return (
    <>
      <div className="card-ls">
        <Link to={`/product/${product.id}`} className="Product-link">
          <div className="card__img">
            <img
              src={
                product.photo
                  ? API_URL + product.photo
                  : API_URL + "/uploads/nia_33d10d0dba.jpg"
              }
              alt=""
              height="120"
              loading={"lazy"}
              className="img-fluid"
            />
          </div>
        </Link>
        <div className="card__data">
          {product.name ? (
            <h5>
              {product.name.length > 16
                ? product.name.substr(0, 14).concat("...")
                : product.name}
            </h5>
          ) : (
            <div className="err">without name</div>
          )}
          <div className="card__subtitle">
            <div className="card__stars">{"★".repeat(product.rating)}</div>
            <div className="card__nostars">
              {"★".repeat(5 - product.rating)}
            </div>
            <span className="card__mark">{product.mark}</span>
          </div>

          <Price price={product.price} />
          {product.stock < 1 ? (
            <div className="err">agotado</div>
          ) : (
            <div className="d__none">_</div>
          )}

          <button
            onClick={() => handleEdit()}
            className="btn btn-block btn-info"
          >
            Añadir
          </button>
        </div>
      </div>
    </>
  )
}
export default React.memo(ProductHome)
