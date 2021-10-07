import React, { useRef, useState } from "react"
import { Nav } from "components"
import { ProductContextProvider } from "context/ProductContext"
import ProductsSeller from "components/seller/ProductsSeller"
import ProductForm from "components/seller/ProductForm"
import { useStoreProducts } from "hooks"

export function Product() {
  const productInput = useRef()
  const [product, setProduct] = useState({
    category: 0,
    name: "",
    mark: "",
    price: 0,
    description: "",
    stock: 0
  }) //register df values

  const [showUpdate, setshowUpdate] = useState()
  const { loading, products, setProducts } = useStoreProducts()

  return (
    <>
      <div className="container">
        {/* <ProductContextProvider> */}
        <div className="row">
          <div className="col-md-4">
            <ProductForm
              productInput={productInput}
              showUpdate={showUpdate}
              setshowUpdate={setshowUpdate}
              setProduct={setProduct}
              product={product}
              setProducts={setProducts}
              products={products}
            />
          </div>
          <div className="col-md-8">
            <div className="row">
              <ProductsSeller
                setshowUpdate={setshowUpdate}
                setProduct={setProduct}
                setProducts={setProducts}
                products={products}
                loading={loading}
              />
            </div>
          </div>
        </div>
        {/* </ProductContextProvider> */}
      </div>
    </>
  )
}
