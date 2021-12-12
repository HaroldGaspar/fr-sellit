import { useRef } from "react"
import ProductsSeller from "components/seller/ProductsSeller"
// import "./Product.css"
import ProductForm from "components/seller/ProductForm"
import { ProductContextProvider } from "context/ProductContext"
import { ProductsContextProvider } from "context"
import { Nav } from "components"
import styled from "styled-components"

const ContainerSellerproducts = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
`
const ProductMng = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 2fr));
  gap: 0 15px;
  padding: 1em;
  @media (min-width: 1150px) {
    grid-template-columns: 1fr 3fr;
  }
  @media (min-width: 750px) {
    grid-template-columns: 1fr 2fr;
  }
  #upload-form {
    margin: auto;
  }
`

export function Product() {
  const productInput = useRef()
  return (
    <>
      <Nav />
      <ContainerSellerproducts>
        <ProductsContextProvider>
          <ProductContextProvider>
            <ProductMng>
              <ProductForm productInput={productInput} />
              <ProductsSeller />
            </ProductMng>
          </ProductContextProvider>
        </ProductsContextProvider>
      </ContainerSellerproducts>
    </>
  )
}
