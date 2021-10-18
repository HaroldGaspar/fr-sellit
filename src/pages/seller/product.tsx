import { useRef } from "react"
import ProductsSeller from "components/seller/ProductsSeller"
import "./Product.css"
import ProductForm from "components/seller/ProductForm"
import { ProductContextProvider } from "context/ProductContext"
import { ProductsContextProvider } from "context"

export function Product() {
  const productInput = useRef()
  return (
    <>
      <div className="container-sellerproducts">
        <ProductsContextProvider>
          <ProductContextProvider>
            <div className="product-mng">
              <ProductForm productInput={productInput} />
              <ProductsSeller />
            </div>
          </ProductContextProvider>
        </ProductsContextProvider>
      </div>
    </>
  )
}
