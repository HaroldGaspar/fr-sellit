import { Nav, ProductDetail } from "components"

export function Product() {
  return (
    <>
      <Nav />
      <div className="container-home">
        <ProductDetail />
      </div>
    </>
  )
}
