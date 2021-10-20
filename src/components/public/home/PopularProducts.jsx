import React, { useEffect, useState } from "react"
// import { ProductHome } from "components"
import { API_URL } from "services/settings"
import { getPopularProducts } from "services"
import { ScrollItem, Spinner } from "components"

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

// .popular {
//   display: flex;
//   color: #000;
//   /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
//   gap: 0 15px;
//   align-items: center;
// }
// @media (max-width: 800px) {
//   .popular {
//     display: block;
//   }
// }

// .popular__img {
//   max-height: 80vh;
// }

// html {
//   scroll-behavior: smooth;
// }
// .section__title {
//   display: block;
//   /* background-color: #b998c7; */
//   padding: 7px;
//   color: #888;
// }

// .popular__inv {
//   background-color: rgba(185, 152, 199, 0.9);
//   padding: 0.75em 0.85em;
//   border-radius: 50%;
// }

// .carousel__text {
//   color: #eee;
//   background-color: rgba(139, 111, 151, 0.9);
// }
