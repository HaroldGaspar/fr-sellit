import { Nav, ProductsBySmmt } from "components"

export function Store() {
  return (
    <>
      <Nav />
      <div className="container-home">
        <ProductsBySmmt entity={"products"} field={"store"} />
      </div>
    </>
  )
}
