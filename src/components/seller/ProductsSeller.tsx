import { useStoreProducts } from "hooks"
import { Spinner } from "components"
import React, { Dispatch, SetStateAction } from "react"
import ProductSeller from "./ProductSeller"
import { Iproduct } from "models/Product"
import styled from "styled-components"

const ListSeller = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 0 15px;
  // align-items: center;
  // background: #b998c7;
  padding: 0.5em;

  height: 85vh;
  overflow: auto;
  @media (max-height: 770px) {
    height: 670px;
  }
`

interface Ihook {
  loading: boolean
  products: Iproduct[]
  setProducts?: Dispatch<SetStateAction<Iproduct[]>>
}

function ProductsSeller() {
  const { loading, products }: Ihook = useStoreProducts()

  return (
    <ListSeller>
      {loading ? (
        <Spinner />
      ) : (
        products.map((productMap: Iproduct, id: number) => (
          <ProductSeller productMap={productMap} key={id} />
        ))
      )}
    </ListSeller>
  )
}
export default React.memo(ProductsSeller)
// ,(prevProps, nextProps)=>{
//   props===
// }
