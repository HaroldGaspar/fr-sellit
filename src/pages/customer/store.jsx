import { Nav, ProductsByStore } from "components"

export function Store() {
  return (
    <>
      <Nav />
      <div className="container-home">
        <ProductsByStore />
      </div>
    </>
  )
}
