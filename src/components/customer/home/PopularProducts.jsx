import React, { useEffect, useState } from "react"
// import { ProductHome } from "components"
import { API_URL } from "services/settings"
import { getPopularProducts } from "services"
import { Spinner } from "components"
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
      <i class="bi bi-cart-dash"></i>
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
            <div class={id === 1 ? "carousel-item active" : "carousel-item"}>
              <img
                class="d-block w-100 popular__img img-fluid "
                src={API_URL + product.photo}
                alt="First slide"
              />
              <div class="carousel__text carousel-caption d-none d-md-block ">
                <h5>{product.name}</h5>
                <p>{product.mark}</p>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselPr"
          role="button"
          data-slide="prev"
        >
          <span className="popular__inv">
            <span class="carousel-control-prev-icon " aria-hidden="true"></span>
            <span class="popular__inv sr-only">Previous</span>
          </span>
        </a>
        <a
          class="carousel-control-next "
          href="#carouselPr"
          role="button"
          data-slide="next"
        >
          <span className="popular__inv">
            <span class="carousel-control-next-icon " aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </span>
        </a>
      </div>
    </>
  )
}
