import React, { useEffect } from "react"
import { ProductSeller } from "components"
import { getProductsByStore } from "services"

export function ProductList(props) {
  useEffect(() => {
    getProductsByStore(props.setProducts)
  }, [])

  return (
    <>
      {props.products.map((product, id) => (
        <ProductSeller product={product} props={props} key={id} />
      ))}
    </>
  )
}
