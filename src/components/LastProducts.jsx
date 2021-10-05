import React, { useEffect } from "react"
import { ProductHome } from "components"
import { getLatestProducts } from "services"
import "./LastProducts.css"

export function LastProducts({ products, setProducts }) {
  useEffect(() => {
    getLatestProducts(products, setProducts)
  }, [])

  return (
    <>
      <h2>Ultimos Productos</h2>
      <div className=" list-latest ">
        {products.map((product, id) => (
          <ProductHome product={product} key={id} />
        ))}
      </div>
    </>
  )
}
