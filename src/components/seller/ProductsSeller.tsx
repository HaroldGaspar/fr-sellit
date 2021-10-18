import { useStoreProducts } from "hooks"
import { Spinner } from "components"
import React, { Dispatch, SetStateAction } from "react"
import ProductSeller from "./ProductSeller"
import { Iproduct } from "models/Product"

interface Ihook {
  loading: boolean
  products: Iproduct[]
  setProducts?: Dispatch<SetStateAction<Iproduct[]>>
}

function ProductsSeller() {
  const { loading, products }: Ihook = useStoreProducts()

  return (
    <div className="list-seller">
      {loading ? (
        <Spinner />
      ) : (
        products.map((productMap: Iproduct, id: number) => (
          <ProductSeller productMap={productMap} key={id} />
        ))
      )}
    </div>
  )
}
export default React.memo(ProductsSeller)
// ,(prevProps, nextProps)=>{
//   props===
// }
