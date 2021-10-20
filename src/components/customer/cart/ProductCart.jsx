import React, { useEffect, useState } from "react"
import { API_URL } from "services/settings"
import { Price } from "components"
import { updateProductDetail } from "services"
import styled from "styled-components"

export function ProductCart({
  productDetail,
  productsDetail,
  setProductsDetail,
  id
}) {
  // const [actualProduct, setactualProduct] = useState({})
  // let handleQty
  const handleQty = (vv) => {
    //rebuild the current productDt
    const pdtlLess = {
      qty: vv ? productDetail.qty + 1 : productDetail.qty - 1,
      productPrice: productDetail.productPrice,
      totalPrice: vv
        ? productDetail.totalPrice + productDetail.productPrice
        : productDetail.totalPrice - productDetail.productPrice,
      productDetailId: productDetail.productDetailId,
      productId: productDetail.productId,
      mark: productDetail.mark,
      productName: productDetail.productName,
      photo: productDetail.photo
    }

    //replace my current productDetail changed with the original
    productsDetail.splice(id, 1, pdtlLess) //activate useEffect
    setProductsDetail([...productsDetail])

    updateProductDetail(pdtlLess)
  }
  useEffect(() => {}, [productsDetail])

  // console.log("product dt ", productDetail)
  return (
    <PrdCart>
      <div className="cartdt">
        <img
          src={
            productDetail?.photo
              ? API_URL + productDetail.photo
              : API_URL + "/uploads/nia_33d10d0dba.jpg"
          }
          className="cartdt__img"
          alt=" "
        />
        <div className="cartdt__detail">
          {/* <h5 className="cardt__name">id:{productDetail.productDetailId}</h5> */}
          <h5 className="cardt__name">{productDetail.productName}</h5>
          <div className="cardt__mark">{productDetail.mark}</div>
          <div className="cardt__qty">
            <button onClick={() => handleQty(false)} className="cardt__btn">
              ❮
            </button>
            <p>Cantidad: {productDetail.qty}</p>
            <button onClick={() => handleQty(true)} className="cardt__btn">
              ❯
            </button>
          </div>
          <div className="cardt__end">
            <button className="card__delete">eliminar</button>
            <Price price={productDetail.totalPrice} />
          </div>
        </div>
      </div>
    </PrdCart>
  )
}

const PrdCart = styled.div`
  .product-cart {
    min-height: 50px;
    display: flex;
  }

  .cartdt {
    display: grid;
    grid-template-columns: 1fr 2fr;
    /* flex-direction: column; */
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    margin-bottom: 15px;
  }

  @media (max-width: 400px) {
    .cartdt__img {
      display: none;
    }
    .cartdt {
      grid-template-columns: 1fr;
    }
  }

  .cartdt__img {
    max-width: 170px;
    height: auto;
    margin: 0 auto;
  }
  .cardt__name {
    margin: 0;
  }
  .cartdt__detail {
    padding: 1em 1em 0 1em;
    background-color: #fbfbfb;
  }

  .cardt__mark {
    text-align: end;
    margin-bottom: 1em;
  }

  .cardt__qty {
    display: flex;
    text-align: center;
    background: #c6c6c6;
    justify-content: space-between;
  }

  .cardt__qty p {
    margin: 8px 0;
  }

  .cardt__btn {
    border: none;
    padding: 0 15px;
    background: #4c4c4c;
    color: #eee;
    border-radius: 4px;
    transition: 0.3s ease all;
  }
  .cardt__btn:hover {
    color: #4c4c4c;
    background: #eee;
  }
  .cardt__end {
    padding: 1em;
    display: flex;
    justify-content: space-between;
  }
  .card__delete {
    border: none;
    background-color: transparent;
  }
  .card__delete:hover {
    color: #44d;
    text-decoration: underline;
  }
`
