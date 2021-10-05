import React, { useEffect, useState } from "react"
import { ProductHome } from "components"
import { getPopularProducts } from "services"

export function PopularProducts() {
  const [homeProducts, sethomeProducts] = useState([])
  useEffect(() => {
    getPopularProducts(homeProducts, sethomeProducts)
  }, [])

  return (
    <>
      <h2 className="d-block">Producto Populares</h2>
      <div className=" d-flex w-100 ">
        {homeProducts.map((product, id) => (
          <ProductHome product={product} key={id} />
        ))}
      </div>
    </>
  )
}
