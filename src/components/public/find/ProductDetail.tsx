import styled from "styled-components"

import { Price } from "components"
import { API_URL } from "services/settings"
import { Iproduct } from "models/Product"
import { useHistory } from "react-router-dom"
import { addProductCart } from "services"
import { useEffect, useState } from "react"
import { useCartProducts } from "hooks"
//SEQUEDA EN CHACHE Y NO ES PARTE DEL COMPONENTE = no se renderiza
//const cart = localStorage.getItem("cart")

export function ProductDetail({
  productDetail,
  reviewLength
}: {
  productDetail: Iproduct
  reviewLength: number
}) {
  const cart = localStorage.getItem("cart")
  // console.log("reviewLength", reviewLength, productDetail.rating)
  // console.log("productsDetail", productsDetail)
  const history = useHistory()
  const [isAdded, setIsAdded] = useState(false)

  const handleEdit = () => {
    addProductCart(productDetail.id)
    setIsAdded(true)
  }

  const goStore = (whe: string) => {
    if (whe === "store") {
      history.push(`/store/${productDetail.storeId}`)
    } else if (whe === "category") {
      history.push(`/category/${productDetail.category}`)
    }
  }
  const { loading, productsDetail, setProductsDetail } = useCartProducts()
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const id = productDetail.id
      const pf = productsDetail.filter((pd: any) => pd.productId === id)
      if (pf.length > 0) setIsAdded(true)
    }
  }, [productsDetail, productDetail.id])

  return (
    <Productdt>
      <h2 className="productdt__title">{productDetail.name}</h2>
      <div className="productdt__img">
        <img
          src={
            productDetail.photo
              ? API_URL + productDetail.photo
              : "http://hakhi.xyz:8000/uploads/enfi_288c1b64fa.png"
          }
          onError={(e: any) => {
            e.target.src = "http://hakhi.xyz:8000/uploads/enfi_288c1b64fa.png"
          }}
          alt=""
        />
      </div>
      <div className="card__subtitle">
        <div className="card__stars">
          {"★".repeat(productDetail.rating / reviewLength)}
        </div>
        <div className="card__nostars">
          {"★".repeat(Math.ceil(5 - productDetail.rating / reviewLength) || 5)}
        </div>
        <span className="card__mark">{productDetail.mark}</span>
      </div>
      {/* LINKS */}
      <div className="right-atribute">
        Tienda:
        <button
          className="productdt__store"
          onClick={(e: any) => goStore("store")}
        >
          {productDetail.storeName}
        </button>
      </div>
      <div className="right-atribute">
        Categoria:
        <button
          className="productdt__store"
          onClick={(e: any) => goStore("category")}
        >
          {productDetail.categoryName}
        </button>
      </div>
      {/* END */}
      <div className="productdt__description">
        ACERCA DEL PRODUCTO <br />{" "}
        {productDetail.description || "no hay descripcion"}
      </div>
      <div>
        Stock: {productDetail.stock} <Price price={productDetail.price} />{" "}
      </div>
      {cart ? (
        <BtnDetail
          onClick={() => handleEdit()}
          disabled={productDetail.stock < 1 ? true : isAdded ? true : false}
        >
          {productDetail.stock < 1
            ? "Agotado"
            : isAdded
            ? "Añadido"
            : "Añadir al carrito"}
        </BtnDetail>
      ) : (
        <BtnDetail onClick={() => history.push("/login")}>
          Logeate para comprar
        </BtnDetail>
      )}
    </Productdt>
  )
}

export const BtnDetail = styled.button`
  width: 100%;
  background: #5a5a5a;
  color: #ededed;
  text-align: center;
  vertical-align: middle;
  padding: 0.5em;
  border: 2.3px solid transparent;
  border-radius: 0.2em;
  transition: 0.4s cubic-bezier(0.4, 0, 1, 1) all;
  font-weight: 700;

  &:hover {
    background: transparent;
    color: #888;
    border: 2.3px solid #888;
  }
  &:disabled {
    color: #444;
    background: #c3c3c3;
    border: 1px solid transparent;
  }
`

const Productdt = styled.div`
  background: #fbfbfb;
  padding: 2em;

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .productdt__img img {
    min-width: 100%;
  }
  .productdt__img {
    height: 400px;
    overflow: hidden;
  }

  .card__mark {
    text-align: end;
    margin-left: auto;
    font-weight: 700;
    font-size: small;
  }

  .productdt__description {
    margin: 1em 0;
    text-align: center;
    font-style: italic;
  }

  .productdt__store {
    border: none;
    background: transparent;
  }
  .right-atribute {
    // text-align: end;
  }

  .productdt__store:hover {
    text-decoration: underline;
    color: blue;
  }

  .card__subtitle {
    font-size: 21px;
  }
`
