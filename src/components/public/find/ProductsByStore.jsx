import React from "react"
import { ProductStore } from "components"

export function ProductsByStore() {
  return (
    <>
      <div>ProductsByStore</div>
      {[1, 2, 3].map((e) => (
        <ProductStore key={e} id={e} />
      ))}
    </>
  )
}
