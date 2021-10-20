import React from "react"
import { ProductCategory } from "components"

export function ProductsByCategory() {
  return (
    <>
      <div>ProductsByCategory</div>
      {[1, 2, 3].map((e) => (
        <ProductCategory key={e} id={e} />
      ))}
    </>
  )
}
