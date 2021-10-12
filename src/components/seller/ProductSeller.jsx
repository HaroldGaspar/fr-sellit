import { Price } from "components/customer/Price"
import React, { useCallback } from "react"
import { Link } from "react-router-dom"
import { deleteProduct } from "services"
import "./ProductSeller.css"

function ProductSeller({
  productMap,
  setshowUpdate,
  products,
  setProducts,
  setProduct
}) {
  // const { setProduct } = useContext(ProductContext)

  const handleEdit = () => {
    const productFiltered = products.filter((p) => p.id === productMap.id)[0]
    setProduct(productFiltered)
    setshowUpdate(true)
  }
  return (
    <div className="productseller__card">
      {productMap.name ? (
        <Link to={`/product/${productMap.id}`} className="Product-link">
          <h5 className="productseller__name">
            {" "}
            {productMap.name.length > 15
              ? productMap.name.substr(0, 12).concat("...")
              : productMap.name}
          </h5>
        </Link>
      ) : (
        <div className="err">without name</div>
      )}
      {productMap.mark ? (
        <h6 className="productseller__mark">{productMap.mark}</h6>
      ) : (
        <div className="err">without mark</div>
      )}
      <div className="row justify-content-between">
        <span className="productseller__stock">stock: {productMap.stock}</span>
        <span className="productseller__price">
          <Price price={productMap.price} />
        </span>
      </div>

      <button onClick={() => handleEdit()} className="list__btn-modify">
        Modificar
      </button>
      <button
        onClick={() => deleteProduct(productMap.id, products, setProducts)}
        className="list__btn-delete"
      >
        Eliminar
      </button>
    </div>
  )
}

export default React.memo(ProductSeller, (p, n) => {
  return p.productMap.id === n.productMap.id
})
