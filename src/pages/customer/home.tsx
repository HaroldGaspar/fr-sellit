import { API_URL } from "services/settings"
import React, { useEffect, useState } from "react"
import { Nav, LastProducts, Spinner } from "components"
import "./Home.css"
import Carousel from "components/customer/home/Carrousel"
import { getPopularProducts } from "services"

export function Home() {
  const [homeProducts, sethomeProducts] = useState([])
  const [loading, setloading] = useState()

  useEffect(() => {
    getPopularProducts(sethomeProducts, setloading)
  }, [])

  return (
    <>
      <Nav />

      <div className="nav__false"></div>

      <div className="container-home">
        {/* <PopularProducts /> */}
        {loading ? (
          <div className="popular-container">
            <Spinner />
          </div>
        ) : (
          <Carousel
            images={homeProducts.map((p) => `${API_URL}${p.photo}`)}
            // autoPlay={true}
            showButtons={true}
          />
        )}

        <LastProducts />
      </div>
      <div className="container">
        <button className="btn mx-auto">next page</button>
      </div>
    </>
  )
}
