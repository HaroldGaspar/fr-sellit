import { ProductSeller } from "components"
import { useStoreProducts } from "hooks"
import { Spinner } from "components/Spinner"

export function ProductsSeller(props) {
  const { loading, products, setProducts } = useStoreProducts()

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        products.map((product, id) => (
          <ProductSeller
            product={product}
            products={products}
            setProducts={setProducts}
            props={props}
            key={id}
          />
        ))
      )}
    </>
  )
}
