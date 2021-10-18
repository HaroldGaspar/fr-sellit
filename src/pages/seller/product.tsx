import { useRef, useState } from "react"
import ProductsSeller from "components/seller/ProductsSeller"
import { useStoreProducts } from "hooks"
import "./Product.css"
import ProductForm from "components/seller/ProductForm"
import { IdfProduct, Iproduct } from "models/Product"

export function Product() {
  const productInput = useRef()
  const [product, setProduct] = useState<Iproduct>({
    category: 0,
    name: "",
    mark: "",
    price: 0.0,
    description: "",
    stock: 0,
    photo: ""
  }) //register df values
  const [dfProduct, setDfProduct] = useState<IdfProduct>({})

  const [showUpdate, setshowUpdate] = useState<boolean>()
  const { loading, products, setProducts } = useStoreProducts()

  return (
    <>
      <div className="container-sellerproducts">
        {/* <ProductContextProvider> */}
        <div className="product-mng">
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
          <ProductsSeller
            setshowUpdate={setshowUpdate}
            setProduct={setProduct}
            setProducts={setProducts}
            products={products}
            loading={loading}
          />
        </div>
        {/* </ProductContextProvider> */}
      </div>
    </>
  )
}
