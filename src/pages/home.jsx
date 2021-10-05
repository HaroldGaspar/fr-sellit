import React from "react"
import { Nav, PopularProducts, LastProducts } from "components"
import { useProducts } from "state"

export function Home() {
  const { products, setProducts } = useProducts()

  return (
    <>
      <Nav />
      <div className="container">
        <PopularProducts products={products} setProducts={setProducts} />
        <LastProducts products={products} setProducts={setProducts} />
      </div>
    </>
  )
}
