import { API_URL } from "services/settings"
import React, { ChangeEvent, useEffect, useState } from "react"
import { Nav, LastProducts, Spinner, CategoriesList } from "components"
// import "./Home.css"
import Carousel from "components/public/home/Carrousel"
import { getCategories, getPopularProducts } from "services"
import styled from "styled-components"
import { useHistory } from "react-router"

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
      <ContainerHome>
        <CategoriesList />

        {/* PRODUCTOS POPULARES */}
        {loading ? (
          <div className="popular-container">
            <Spinner />
          </div>
        ) : (
          <Carousel
            images={homeProducts.map((p) => `${API_URL}${p.photo}`)}
            products={homeProducts}
            // autoPlay={true}
            showButtons={true}
          />
        )}

        <LastProducts />
      </ContainerHome>
      <div className="container">
        <button className="btn mx-auto">next page</button>
      </div>
    </>
  )
}

const ContainerHome = styled.div`
  min-height: 100vh;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 0 11px;
  @media (max-width: 500px) {
    display: grid;
  }
`
type HandleInputChange =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement
