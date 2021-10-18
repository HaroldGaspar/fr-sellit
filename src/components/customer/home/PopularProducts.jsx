import React, { useEffect, useState } from "react"
// import { ProductHome } from "components"
import { API_URL } from "services/settings"
import { getPopularProducts } from "services"
import { ScrollItem, Spinner } from "components"
import "./PopularProducts.css"
import ProductHome from "./ProductHome"

export function PopularProducts() {
  const [homeProducts, sethomeProducts] = useState([])
  const [loading, setloading] = useState()

  useEffect(() => {
    getPopularProducts(sethomeProducts, setloading)
  }, [])

  return (
    <>
      <h2 className="section__title">Producto Populares</h2>
      <i className="bi bi-cart-dash"></i>
      <div
        id="carouselPr"
        className="carousel slide popular"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselPr"
            data-slide-to="0"
            className="active "
          ></li>
          <li data-target="#carouselPr" data-slide-to="1"></li>
          <li data-target="#carouselPr" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          {homeProducts.map((product, id) => (
            <div
              className={id === 1 ? "carousel-item active" : "carousel-item"}
              key={id}
            >
              <img
                className="d-block w-100 popular__img img-fluid "
                src={API_URL + product.photo}
                alt="First slide"
              />
              <div className="carousel__text carousel-caption d-none d-md-block ">
                <h5>{product.name}</h5>
                <p>{product.mark}</p>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselPr"
          role="button"
          data-slide="prev"
        >
          <span className="popular__inv">
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
            ></span>
            <span className="popular__inv sr-only">Previous</span>
          </span>
        </a>
        <a
          className="carousel-control-next "
          href="#carouselPr"
          role="button"
          data-slide="next"
        >
          <span className="popular__inv">
            <span
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </span>
        </a>
      </div>
    </>
  )
}
