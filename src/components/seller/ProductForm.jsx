import React, { useRef, useState } from "react"
// import { Buttons } from "components"
// import { handleIChange } from "utils"
import { addProduct, handleUploadFormSubmit, updateProduct } from "services"
import InputImage from "components/form/InputImage"
import "components/form/Form.css"

import ProductContext from "context/ProductContext"
import { useContext } from "react"
import { useStoreProducts } from "hooks"
import InputProduct from "components/form/InputProduct"
import Buttons from "components/form/Buttons"
import axios from "axios"

function ProductForm({
  setshowUpdate,
  setProduct,
  setProducts,
  products,
  product,
  productInput,
  showUpdate
}) {
  // const { product, setProduct } = useContext(ProductContext)
  // const { products, setProducts } = useStoreProducts()

  console.log("form")
  const imgSS = useRef()

  const handleIChange = (e, product, setProduct) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
    // if (!props.task.id)
    //     document.title= 'creating task'
  }

  const [formData, setFormData] = useState()

  function getFormData(file) {
    const formData = new FormData(file)
    return formData
  }

  return (
    <div
      className={
        showUpdate
          ? "card card-body bg-light mt-2"
          : "card card-body bg-muted mt-2"
      }
    >
      <h2 className="form__title">
        {showUpdate ? "Modificar Producto" : "Agregar Producto"}
      </h2>
      <>
        <InputImage
          handleUploadFormSubmit={handleUploadFormSubmit}
          setFormData={setFormData}
          imgSS={imgSS}
        />
      </>
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
                  // formData,
                  imgSS
                )
        }
      >
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
        <form name="files" id="iii">
          <input type="file" name="file" />
        </form>
        <Buttons
          setshowUpdate={setshowUpdate}
          setProduct={setProduct}
          productInput={productInput}
          showUpdate={showUpdate}
        />
      </form>
      {/* <form id="upload-form" onSubmit={handleUploadFormSubmit}>
        <input type="file" name="files" />
        <button type="submit" ref={imgSS}>
          upl
        </button>
      </form> */}
    </div>
  )
}

export default React.memo(
  ProductForm
  // , (p, n) => { //
  //return p.products !== n.products //avoid render form due deleteProduct setProducts()
  // }
)
