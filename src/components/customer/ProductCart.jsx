import { Spinner } from "components/Spinner"
import React, { useEffect, useState } from "react"
import { getProduct } from "services"
import { API_URL } from "services/settings"
import "./ProductCart.css"

export function ProductCart({ productDetail }) {
  const [actualProduct, setactualProduct] = useState({})
  const [loading, setloading] = useState()

  useEffect(() => {
    getProduct(productDetail.product, setactualProduct, setloading)
  }, [])
  return (
    <>
      {/* {loading ? (
        <Spinner />
      ) : ( */}
      <div className="card product-cart row w-100">
        <div className="col-6">
          <img
            src={
              actualProduct.photo
                ? API_URL + actualProduct.photo
                : API_URL + "/uploads/nia_33d10d0dba.jpg"
            }
            alt=""
          />
        </div>
        <div className="col-6">
          <p>{actualProduct.photo}</p>
          <div>{actualProduct.name}</div>
          <div>{actualProduct.mark}</div>
          <p>Cantidad: {productDetail.qty}</p>
          <p>{actualProduct.price}</p>
        </div>
      </div>
      {/* )} */}
    </>
  )
}
