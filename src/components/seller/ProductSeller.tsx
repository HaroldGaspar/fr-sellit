import { Price } from "components"
import { Iproduct } from "models/Product"
import React, { useCallback, useContext } from "react"
import { Link } from "react-router-dom"
import { deleteProduct } from "services"

import ProductsContext from "context/ProductsContext"
import ProductContext from "context/ProductContext"
import styled from "styled-components"
// import "./ProductSeller.css"

interface props {
  productMap: any
}

function ProductSeller({ productMap }: props) {
  const { setProduct, setshowUpdate }: any = useContext(ProductContext)
  const { products, setProducts }: any = useContext(ProductsContext)

  const handleEdit = () => {
    const productFiltered = products.filter(
      (p: Iproduct) => p.id === productMap.id
    )[0]
    setProduct(productFiltered)
    setshowUpdate(true)
  }
  return (
    <PdSeller>
      {/* <div className="productseller__card"> */}
      {productMap.name ? (
        <Link to={`/product/${productMap.id}`} className="Product-link">
          <h5 className="productseller__name">
            {productMap.name}
            {/* {productMap.name.length > 15
                ? productMap.name.substr(0, 12).concat("...")
                : productMap.name} */}
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
      {/* </div> */}
    </PdSeller>
  )
}

export default React.memo(ProductSeller, (p, n) => {
  return p.productMap.id === n.productMap.id
})

const PdSeller = styled.div`
  // .productseller__card {
  padding: 1em;
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-bottom: 1em;
  max-width: 350px;
  background: #b998c7;
  height: fit-content;
  // }

  .productseller__stock {
    padding-left: 1em;
  }
  .productseller__mark {
    text-align: right;
  }
  .productseller__price {
    padding-right: 1em;
  }

  .list__btn-modify {
    display: block;
    width: 100%;
    font-weight: 700;
    padding: 0.4rem 0.75rem;

    background-color: #766d7a;
    color: #eee;
    transition: 0.15s ease all;
    border-radius: 4px;
    border: none;
    margin: 0.15em 0;
  }
  .list__btn-modify:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .list__btn-delete {
    display: block;
    width: 100%;
    font-weight: 700;
    padding: 0.35rem 0.75rem;

    background-color: #fff;
    border: 1px solid #d44;
    color: #d44;
    border-radius: 4px;
    transition: 0.3s ease all;
  }

  .list__btn-delete:hover {
    color: #fff;
    background-color: #d44;
  }

  .productseller__name {
    color: #444;
    font-weight: 700;
    //
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`
