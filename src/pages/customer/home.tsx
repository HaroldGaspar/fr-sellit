import { API_URL } from "services/settings"
import React, { ChangeEvent, useEffect, useState } from "react"
import { Nav, LastProducts, Spinner } from "components"
// import "./Home.css"
import Carousel from "components/public/home/Carrousel"
import { getCategories, getPopularProducts } from "services"
import styled from "styled-components"
import { useHistory } from "react-router"

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

export function Home() {
  const [homeProducts, sethomeProducts] = useState([])
  const [loading, setloading] = useState()
  const [categoris, setCategories] = useState<string[]>([])
  const history = useHistory()

  useEffect(() => {
    getPopularProducts(sethomeProducts, setloading)
    getCategories(setCategories)
  }, [])

  //update state which send to add/upd SERVICE
  const handleIChange = (e: ChangeEvent<HandleInputChange>) => {
    const { value } = e.target
    history.push(`/category/${value}`)
  }
  return (
    <>
      <Nav />

      <div className="nav__false"></div>

      <ContainerHome>
        <div className="form__label">
          Categoria
          <select
            name="category"
            onChange={(e) => handleIChange(e)}
            className="form__control"
            // value={product.category || 0} //?.id
            autoFocus
          >
            <option key={0} value={0}>
              sin categoria
            </option>
            {categoris.map((e, i) => (
              <option key={i + 1} value={i + 1}>
                {e}
              </option>
            ))}
          </select>
        </div>

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
