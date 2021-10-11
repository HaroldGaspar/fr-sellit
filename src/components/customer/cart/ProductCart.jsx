import React, { useEffect, useState } from "react"
import { API_URL } from "services/settings"
import { Price } from "components"
import "./ProductCart.css"

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
  }
  useEffect(() => {}, [productsDetail])

  // console.log("product dt ", productDetail)
  return (
    <>
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
    </>
  )
}
