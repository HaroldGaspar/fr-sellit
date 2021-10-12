import { Nav, ProductsByCategory } from "components"

export function Category() {
  return (
    <>
      <Nav />
      <div className="container-home">
        <ProductsByCategory />
      </div>
    </>
  )
}
