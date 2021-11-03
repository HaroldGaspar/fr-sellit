import { Nav, ProductsByCategory, ProductsBySmmt } from "components"

export function Category() {
  return (
    <>
      <Nav />
      <div className="container-home">
        <ProductsBySmmt entity={"products"} field={"category"} />
      </div>
    </>
  )
}
