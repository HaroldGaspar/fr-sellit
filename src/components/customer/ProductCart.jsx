import React, { useEffect, useState } from "react"
import { API_URL } from "services/settings"
import { Price } from "./Price"
import "./ProductCart.css"

export function ProductCart({
  productDetail,

  productsDetail,
  setProductsDetail,
  id
}) {
  // const [actualProduct, setactualProduct] = useState({})
  // let handleQty
  const handleQtyk = () => {
    //     productsDetail[id] = actualProduct
    const pdtlPlus = {
      qty: productDetail.qty + 1,
      productPrice: productDetail.productPrice,
      totalPrice: productDetail.totalPrice + productDetail.productPrice,
      productDetailId: productDetail.productDetailId,
      productId: productDetail.productId,
      mark: productDetail.mark,
      productName: productDetail.productName,
      photo: productDetail.photo
    }
    const newProductsDetail = productsDetail
    newProductsDetail.splice(id, 1, pdtlPlus)

    const productDetailE = newProductsDetail
    console.log(productDetailE)
    //state
    setProductsDetail([...productsDetail])
  }

  const handleQtyj = () => {
    const pdtlLess = {
      qty: productDetail.qty - 1,
      productPrice: productDetail.productPrice,
      totalPrice: productDetail.totalPrice - productDetail.productPrice,
      productDetailId: productDetail.productDetailId,
      productId: productDetail.productId,
      mark: productDetail.mark,
      productName: productDetail.productName,
      photo: productDetail.photo
    }

    const newProductsDetailx = productsDetail
    newProductsDetailx.splice(id, 1, pdtlLess)

    const productDetailE = newProductsDetailx
    console.log(productDetailE)
    // setProductsDetail(newProductsDetail)
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
          className="img-fluid"
          alt=" "
        />
        <div className="cartdt__detail">
          <h5 className="cardt__name">id:{productDetail.productDetailId}</h5>
          <h5 className="cardt__name">{productDetail.productName}</h5>
          <div className="cardt__mark">{productDetail.mark}</div>
          <div className="cardt__qty">
            <button onClick={() => handleQtyj(false)} className="cardt__btn">
              ❮
            </button>
            <p>Cantidad: {productDetail.qty}</p>
            <button onClick={() => handleQtyk(true)} className="cardt__btn">
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
