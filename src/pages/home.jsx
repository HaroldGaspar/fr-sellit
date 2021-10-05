import React from "react"
import { Nav, PopularProducts, LastProducts } from "components"
import "./Home.css"
export function Home() {
  return (
    <>
      <Nav />
      <div className="container-home">
        <PopularProducts />
        <LastProducts />
      </div>
      <div className="container">
        <button className="btn mx-auto">next page</button>
      </div>
    </>
  )
}
