import React, { useRef, useState } from "react"
import ProductsSeller from "components/seller/ProductsSeller"
import ProductForm from "components/seller/ProductForm"
import { useStoreProducts } from "hooks"
import "./Page.css"

export function Product() {
  const productInput = useRef()
  const [product, setProduct] = useState({
    category: 0,
    name: "",
    mark: "",
    price: 0.0,
    description: "",
    stock: 0,
    photo: ""
  }) //register df values

  const [showUpdate, setshowUpdate] = useState()
  const { loading, products, setProducts } = useStoreProducts()

  return (
    <>
      <div className="container-home">
        {/* <ProductContextProvider> */}
        <div className="product-mng">
          {/* <div className="col-md-4"> */}
          <ProductForm
            productInput={productInput}
            showUpdate={showUpdate}
            setshowUpdate={setshowUpdate}
            setProduct={setProduct}
            product={product}
            setProducts={setProducts}
            products={products}
          />
          {/* </div>
          <div className="col-md-8"> */}
          <ProductsSeller
            setshowUpdate={setshowUpdate}
            setProduct={setProduct}
            setProducts={setProducts}
            products={products}
            loading={loading}
          />
          {/* </div> */}
        </div>
        {/* </ProductContextProvider> */}
      </div>
    </>
  )
}
