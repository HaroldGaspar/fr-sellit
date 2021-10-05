import { useEffect } from "react"
import { Buttons, InputProduct } from "components"
import { handleIChange } from "utils"
import { addProduct, updateProduct } from "services"
import InputImage from "components/form/InputImage"
import "components/form/Form.css"

import ProductContext from "context/ProductContext"
import { useContext } from "react"
import { useStoreProducts } from "hooks"

export function ProductForm(props) {
  const { product, setProduct } = useContext(ProductContext)
  const { products, setProducts } = useStoreProducts()

  console.log("form")
  return (
    <div
      className={
        props.showUpdate
          ? "card card-body bg-light mt-2"
          : "card card-body bg-muted mt-2"
      }
    >
      <form
        onSubmit={
          props.showUpdate
            ? (e) =>
                updateProduct(
                  e,
                  props,
                  product,
                  setProduct,
                  products,
                  setProducts
                )
            : (e) =>
                addProduct(e, props, product, setProduct, products, setProducts)
        }
      >
        <h2 className="form__title">
          {props.showUpdate ? "Modificar Producto" : "Agregar Producto"}
        </h2>

        <div className="form__group">
          <label htmlFor="category">Categoria</label>
          <input
            type="text"
            name="category"
            onChange={(e) => handleIChange(e, product, setProduct)}
            className="form__control"
            value={product.category?.id | 0}
            autoFocus
            ref={props.productInput}
          />
        </div>
        <InputProduct
          name={"name"}
          label={"Nombre"}
          props={props}
          product={product}
          setProduct={setProduct}
        />
        <InputProduct
          name={"mark"}
          label={"Marca"}
          props={props}
          product={product}
          setProduct={setProduct}
        />
        <InputProduct
          name={"price"}
          label={"Precio"}
          props={props}
          number={true}
          product={product}
          setProduct={setProduct}
        />
        <InputProduct
          name={"stock"}
          label={"Stock"}
          props={props}
          number={true}
          product={product}
          setProduct={setProduct}
        />

        <div className="form__group">
          <label htmlFor="description">Descripcion</label>
          <textarea
            name="description"
            onChange={(e) => handleIChange(e, product, setProduct)}
            className="form__control"
            value={product.description}
          ></textarea>
        </div>

        {/* <InputImage props={props} /> */}

        <Buttons props={props} setProduct={setProduct} />
      </form>
    </div>
  )
}
