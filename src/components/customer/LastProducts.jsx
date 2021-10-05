import { ProductHome, Spinner } from "components"
import { useLastestProducts } from "hooks"
import "./LastProducts.css"

export function LastProducts() {
  const { loading, products } = useLastestProducts()
  return (
    <>
      <h2>Ultimos Productos</h2>
      <div className=" list-latest ">
        {loading ? (
          <Spinner />
        ) : (
          products.map((product, id) => (
            <ProductHome product={product} key={id} />
          ))
        )}
      </div>
    </>
  )
}
