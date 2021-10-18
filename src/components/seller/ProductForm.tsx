import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from "react"
import { addProduct, getCategories, updateProduct } from "services"
import { InputImage } from "components"
import ProductsContext from "context/ProductsContext"
import ProductContext from "context/ProductContext"

import InputProduct from "components/seller/seller-form/InputProduct"
import Buttons from "components/seller/seller-form/ProductFormButtons"
import { Iproduct } from "models/Product"

import "./ProductForm.css"

interface props {
  productInput: any
}

type HandleInputChange =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement

function ProductForm({ productInput }: props) {
  const { products, setProducts }: any = useContext(ProductsContext)
  const { product, setProduct, showUpdate, setshowUpdate, dfProduct }: any =
    useContext(ProductContext)

  //update state which send to add/upd SERVICE
  const handleIChange = (
    e: React.ChangeEvent<HandleInputChange>,
    product: Iproduct,
    setProduct: Dispatch<SetStateAction<Iproduct>>
  ) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }
  const [categoris, setCategories] = useState<string[]>([])

  useEffect(() => {
    getCategories(setCategories)
  }, [setCategories])
  return (
    <form
      onSubmit={
        showUpdate
          ? (e) => {
              e.preventDefault()
              updateProduct(
                product,
                setProduct,
                products,
                setProducts,
                setshowUpdate
              )
            }
          : (e) => {
              e.preventDefault()
              addProduct(product, setProduct, products, setProducts, dfProduct)
            }
      }
      id="upload-form"
      className={showUpdate ? " form-addp form-editp" : "form-addp"}
    >
      <h2 className="form__title">
        {showUpdate ? "Modificar Producto" : "Agregar Producto"}
      </h2>

      {showUpdate ? null : <InputImage />}

      <div className="form__group">
        <label className="form__label">
          Categoria
          <select
            name="category"
            onChange={(e) => handleIChange(e, product, setProduct)}
            className="form__control"
            value={product.category || 0} //?.id
            ref={productInput}
            autoFocus
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
        number={"decimal"}
        product={product}
        setProduct={setProduct}
      />
      <InputProduct
        name={"stock"}
        label={"Stock"}
        number={"number"}
        product={product}
        setProduct={setProduct}
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
        productInput={productInput}
        showUpdate={showUpdate}
      />
    </form>
  )
}

export default React.memo(ProductForm)
