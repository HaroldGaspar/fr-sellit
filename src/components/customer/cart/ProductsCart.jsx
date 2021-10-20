import { Spinner, ProductCart } from "components"
import { useCartProducts } from "hooks"

export function ProductsCart() {
  const { loading, productsDetail, setProductsDetail } = useCartProducts()

  // With dependency productsDetail exec every change
  // Without dont consider hook going it  empty

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        productsDetail.map((productDetail, id) => (
          <ProductCart
            productDetail={productDetail}
            productsDetail={productsDetail}
            setProductsDetail={setProductsDetail}
            key={id}
            id={id}
          />
        ))
      )}
    </>
  )
}
