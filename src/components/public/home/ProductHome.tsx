import { API_URL } from "services/settings"
import React from "react"
import { Link } from "react-router-dom"
import { addProductCart } from "services"
import { Price } from "components"
import { Iproduct } from "models/Product"
import styled from "styled-components"

function ProductHome({ product }: { product: Iproduct }) {
  const handleEdit = () => {
    addProductCart(product.id)
  }
  return (
    <PrdHome>
      <div className="cardls">
        <Link to={`/product/${product.id}`} className="Product-link">
          <div className="card__img">
            <img
              src={
                !product.photo
                  ? `${API_URL}/uploads/nia_33d10d0dba.jpg`
                  : API_URL + product.photo
              }
              //http://localhost:8000/uploads/enfi_455ecace47.jpg
              onError={(e: any) => {
                e.target.onerror = ""
                e.target.src = `${API_URL}/uploads/enfi_288c1b64fa.png`
              }}
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
    </PrdHome>
  )
}
export default React.memo(ProductHome)

const PrdHome = styled.div`
  .Product-link {
    text-decoration: none;
  }

  .cardls {
    position: relative;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;

    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    margin-top: 10px;
    background: #ececec;
  }

  .card__data {
    padding: 0 1.25rem 0.25em 1.25rem;
  }

  .card__img {
    min-height: 1px;
    /* padding: 1.25rem; */
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: 0.25rem 0.25rem 0 0;
  }

  .card__mark {
    margin-left: auto;
  }

  .err {
    color: #f55;
    text-align: end;
    font-style: oblique;
    margin: 1.2px 0;
  }

  .d__none {
    color: transparent;
  }
  .card__subtitle {
    display: flex;
  }
  .card__stars {
    color: gold;
  }

  .card__nostars {
    color: #bbb;
  }
`
