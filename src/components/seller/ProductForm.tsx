import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from "react"
// import { Buttons } from "components"
// import { handleIChange } from "utils"
import {
  addProduct,
  getCategories,
  // handleUploadFormSubmit,
  updateProduct
} from "services"
import { InputImage } from "components"

import InputProduct from "components/extras/form/InputProduct"
import Buttons from "components/extras/form/ProductFormButtons"
import { Iproduct } from "models/Product"

import "./ProductForm.css"

interface props {
  setshowUpdate: any
  setProduct: any
  setProducts: any
  products: any
  product: Iproduct
  productInput: any
  showUpdate: any
  dfProduct: any
  setDfProduct: any
}

function ProductForm({
  setshowUpdate,
  setProduct,
  setProducts,
  products,
  product,
  productInput,
  showUpdate,
  dfProduct,
  setDfProduct
}: props) {
  const [imgid, setImgid] = useState()
  const [categoris, setCategories] = useState([])

  const handleIChange = (
    e: React.ChangeEvent<any>,
    product: Iproduct,
    setProduct: Dispatch<SetStateAction<Iproduct>>
  ) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  useEffect(() => {
    getCategories(setCategories)
    // setCategories(cat)
    return () => {
      console.log("UNMOUNT")
    }
  }, [setCategories])

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
                imgid,
                dfProduct
              )
      }
      className={showUpdate ? " form-addp form-editp" : "form-addp"}
    >
      <h2 className="form__title">
        {showUpdate ? "Modificar Producto" : "Agregar Producto"}
      </h2>
      {/* image */}
      {showUpdate ? null : <InputImage setImgid={setImgid} />}
      {/* category */}

      <div className="form__group">
        <label className="form__label">
          Categoria
          <select
            name="category"
            onChange={(e) => handleIChange(e, product, setProduct)}
            className="form__control"
            value={product.category || 0} //?.id
            autoFocus
            ref={productInput}
          >
            <option key={0} value={0}>
              sin categoria
            </option>
            {categoris.map((e, i) => (
              <option key={i + 1} value={i + 1}>
                {e}
              </option>
            ))}
          </select>
        </label>
      </div>
      <InputProduct
        name={"name"}
        label={"Nombre"}
        product={product}
        setProduct={setProduct}
        dfProduct={dfProduct}
        setDfProduct={setDfProduct}
      />
      <InputProduct
        name={"mark"}
        label={"Marca"}
        product={product}
        setProduct={setProduct}
        dfProduct={dfProduct}
        setDfProduct={setDfProduct}
      />
      <InputProduct
        name={"price"}
        label={"Precio"}
        number={true}
        product={product}
        setProduct={setProduct}
        dfProduct={dfProduct}
        setDfProduct={setDfProduct}
      />
      <InputProduct
        name={"stock"}
        label={"Stock"}
        number={true}
        product={product}
        setProduct={setProduct}
        dfProduct={dfProduct}
        setDfProduct={setDfProduct}
      />

      <div className="form__group">
        <label className="form__label">
          Descripcion
          <textarea
            name="description"
            onChange={(e) => handleIChange(e, product, setProduct)}
            className="form__control"
            value={product.description}
          ></textarea>
        </label>
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
