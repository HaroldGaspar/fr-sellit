import React, { useRef, useState } from "react"
// import { Buttons } from "components"
// import { handleIChange } from "utils"
import { addProduct, handleUploadFormSubmit, updateProduct } from "services"
import InputImage from "components/form/InputImage"
import "components/form/Form.css"

import InputProduct from "components/form/InputProduct"
import Buttons from "components/form/Buttons"

function ProductForm({
  setshowUpdate,
  setProduct,
  setProducts,
  products,
  product,
  productInput,
  showUpdate
}) {
  console.log("form")
  const [imgid, setImgid] = useState()

  const handleIChange = (e, product, setProduct) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  return (
    <form
      onSubmit={
        showUpdate
          ? (e) =>
              updateProduct(
                e,
                product,
                setProduct,
                products,
                setProducts,
                productInput,
                setshowUpdate
              )
          : (e) =>
              addProduct(
                e,
                product,
                setProduct,
                products,
                setProducts,
                productInput,
                imgid
              )
      }
      className={showUpdate ? " form-addp form-editp" : "form-addp"}
    >
      <h2 className="form__title">
        {showUpdate ? "Modificar Producto" : "Agregar Producto"}
      </h2>
      {showUpdate ? null : <InputImage setImgid={setImgid} />}
      <div className="form__group">
        <label htmlFor="category">Categoria</label>
        <input
          type="text"
          name="category"
          onChange={(e) => handleIChange(e, product, setProduct)}
          className="form__control"
          value={product.category?.id}
          autoFocus
          ref={productInput}
        />
      </div>
      <InputProduct
        name={"name"}
        label={"Nombre"}
        product={product}
        setProduct={setProduct}
      />
      <InputProduct
        name={"mark"}
        label={"Marca"}
        product={product}
        setProduct={setProduct}
      />
      <InputProduct
        name={"price"}
        label={"Precio"}
        number={true}
        product={product}
        setProduct={setProduct}
      />
      <InputProduct
        name={"stock"}
        label={"Stock"}
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
      <Buttons
        setshowUpdate={setshowUpdate}
        setProduct={setProduct}
        productInput={productInput}
        showUpdate={showUpdate}
      />
    </form>
  )
}

export default React.memo(
  ProductForm
  // , (p, n) => { //
  //return p.products !== n.products //avoid render form due deleteProduct setProducts()
  // }
)
