import React, { useRef, useState } from "react"
import ProductsSeller from "components/seller/ProductsSeller"
import { useStoreProducts } from "hooks"
import "./Page.css"
import ProductForm from "components/seller/ProductForm"
import { Iproduct } from "models/Product"



export function Product() {
  const productInput = useRef()
  const [product, setProduct] = useState<Iproduct>({
    category: 0,
    name:"",
    mark: "",
    price: 0.00,
    description: "",
    stock: 0,
    photo: ""
  }) //register df values
  const [dfProduct, setDfProduct] = useState({})

  const [showUpdate, setshowUpdate] = useState<boolean>()
  const { loading, products, setProducts } = useStoreProducts()

  return (
    <>
      <div className="container-sellerproducts">
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
            dfProduct={dfProduct}
            setDfProduct={setDfProduct}
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
