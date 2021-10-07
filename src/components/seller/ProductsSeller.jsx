import { useStoreProducts } from "hooks"
import { Spinner } from "components/Spinner"
import React from "react"
import ProductSeller from "./ProductSeller"

function ProductsSeller({
  setshowUpdate,
  setProduct,
  loading,
  products,
  setProducts
}) {
  // const { loading, products, setProducts } = useStoreProducts()

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        products.map((productMap, id) => (
          <ProductSeller
            productMap={productMap}
            products={products}
            setProducts={setProducts}
            setshowUpdate={setshowUpdate}
            key={id}
            setProduct={setProduct}
          />
        ))
      )}
    </>
  )
}
export default React.memo(ProductsSeller)
// ,(prevProps, nextProps)=>{
//   props===
// }
