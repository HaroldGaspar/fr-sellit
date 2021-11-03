import styled from "styled-components"

import { Price } from "components"
import { API_URL } from "services/settings"
import { Iproduct } from "models/Product"

export function ProductDetail({
  productDetail,
  loading
}: {
  productDetail: Iproduct
  loading: any
}) {
  return (
    <div className="productdt">
      <h2 className="productdt__title">{productDetail.name}</h2>
      <div className="productdt__img">
        <img src={productDetail ? API_URL + productDetail.photo : ""} alt="" />
      </div>
      <div className="card__subtitle">
        <div className="card__stars">{"★".repeat(productDetail.rating)}</div>
        <div className="card__nostars">
          {"★".repeat(5 - productDetail.rating)}
        </div>
        <span className="card__mark">{productDetail.mark}</span>
      </div>
      <div className="productdt__name">{productDetail.description}</div>
      <p className="text-right">
        Precio: <Price price={productDetail.price} />{" "}
      </p>
      <p>{productDetail.description}</p>
    </div>
  )
}
