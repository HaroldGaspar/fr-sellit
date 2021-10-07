import React, { useEffect, useState } from "react"
// import { ProductHome } from "components"
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
      <h2 className="d-block">Producto Populares</h2>
      <div className=" d-flex w-100 list-popular">
        {loading ? (
          <Spinner />
        ) : (
          homeProducts.map((product, id) => (
            <ProductHome product={product} key={id} />
          ))
        )}
      </div>
    </>
  )
}
