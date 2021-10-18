import { useStoreProducts } from "hooks"
import { Spinner } from "components"
import React, { Dispatch, SetStateAction } from "react"
import ProductSeller from "./ProductSeller"
import { Iproduct } from "models/Product"

interface Iprops {
  setshowUpdate: Dispatch<SetStateAction<boolean>>
  setProduct: Dispatch<SetStateAction<Iproduct>>
  loading: boolean
  products: Iproduct[]
  setProducts: Dispatch<SetStateAction<Iproduct[]>>
}

function ProductsSeller({
  setshowUpdate,
  setProduct,
  loading,
  products,
  setProducts
}: Iprops) {
  // const { loading, products, setProducts } = useStoreProducts()

  return (
    <div className="list-seller">
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
    </div>
  )
}
export default React.memo(ProductsSeller)
// ,(prevProps, nextProps)=>{
//   props===
// }
