import { Price } from "components"
import React from "react"
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"

export function OneProduct({ product }) {
  const history = useHistory()
  const goStore = () => {
    history.push(`/store/${product.store.id}`)
  }

  return (
    <>
      <Productls>
        <div className="productls__name">{product.name}</div>
        <Link to={`/product/${product.id}`} className="Product-link">
          <img
            className="productls__img"
            src={"http://hakhi.xyz:8000" + product.photo}
            onError={(e) => {
              e.target.src = "http://hakhi.xyz:8000/uploads/enfi_288c1b64fa.png"
            }}
            alt={product.name}
          />
        </Link>
        <p>marca: {product.mark}</p>
        <button className="productdt__store" onClick={goStore}>
          {product.store.name}
        </button>
        <div>
          <Price price={product.price} />
        </div>
      </Productls>
    </>
  )
}
const Productls = styled.div`
  border: 1px solid #ccc;
  margin: 0.35em;
  padding: 1.3em 0.35em;
  border-radius: 0.25em;
  background: #ededed;

  .productls__name {
    font-size: 18px;
    font-weight: 700;
  }

  .productdt__store {
    border: none;
    background: transparent;
  }

  .productdt__store:hover {
    text-decoration: underline;
    color: blue;
  }
`
