import React, { useCallback } from "react"
// import { handleEdit } from "utils"
import { deleteProduct } from "services"
import ProductContext from "context/ProductContext"
import { useContext } from "react"

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
    <div
      className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-2"
      key={productMap.id}
    >
      <div className="card card-body">
        <h3>{productMap.name}</h3>
        <h6 className="text-right">{productMap.mark}</h6>

        <div className="row justify-content-between">
          <span className="col-6">stock: {productMap.stock}</span>
          <p className="col-4 pl-0 price">
            <span className="align-top currency">S/</span>
            {productMap.price}
          </p>
        </div>

        <button onClick={() => handleEdit()} className="btn btn-block btn-info">
          Actualizar
        </button>
        <button
          onClick={() => deleteProduct(productMap.id, products, setProducts)}
          className="btn btn-block btn-outline-danger"
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default React.memo(ProductSeller, (p, n) => {
  return p.productMap.id === n.productMap.id
})
