import React from "react"
import { handleEdit } from "utils"
import { deleteProduct } from "services"
import ProductContext from "context/ProductContext"
import { useContext } from "react"

export function ProductSeller({ product, props, products, setProducts }) {
  const { setProduct } = useContext(ProductContext)

  return (
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-2" key={product.id}>
      <div className="card card-body">
        <h3>{product.name}</h3>
        <h6 className="text-right">{product.mark}</h6>

        <div className="row justify-content-between">
          <span className="col-6">stock: {product.stock}</span>
          <p className="col-4 pl-0 price">
            <span className="align-top currency">S/</span>
            {product.price}
          </p>
        </div>

        <button
          onClick={() => handleEdit(product.id, props, products, setProduct)}
          className="btn btn-block btn-info"
        >
          Actualizar
        </button>
        <button
          onClick={() => deleteProduct(product.id, products, setProducts)}
          className="btn btn-block btn-outline-danger"
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}