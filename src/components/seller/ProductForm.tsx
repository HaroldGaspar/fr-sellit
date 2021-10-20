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
import styled from "styled-components"

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
  const [categoris, setCategories] = useState<string[]>([])
  const [imageSelectedPrevious, setImageSelectedPrevious] = useState<any>()

  //update state which send to add/upd SERVICE
  const handleIChange = (
    e: React.ChangeEvent<HandleInputChange>,
    product: Iproduct,
    setProduct: Dispatch<SetStateAction<Iproduct>>
  ) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

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
              setImageSelectedPrevious("") //remove image for another saved
              addProduct(product, setProduct, products, setProducts, dfProduct)
            }
      }
      id="upload-form"
      className={showUpdate ? " form-addp form-editp" : "form-addp"}
    >
      <h2 className="form__title">
        {showUpdate ? "Modificar Producto" : "Agregar Producto"}
      </h2>

      {showUpdate ? null : (
        <InputImage
          imageSelectedPrevious={imageSelectedPrevious}
          setImageSelectedPrevious={setImageSelectedPrevious}
        />
      )}

      <FormGroup>
        <div className="form__label">
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
        </div>
      </FormGroup>

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

      <FormGroup>
        <label className="form__label">
          Descripcion
          <textarea
            name="description"
            onChange={(e) => handleIChange(e, product, setProduct)}
            className="form__control"
            value={product.description}
          ></textarea>
        </label>
      </FormGroup>
      <Buttons productInput={productInput} />
    </form>
  )
}

export default React.memo(ProductForm)

// import "./ProductForm.css"
const FormGroup = styled.div`
  margin-bottom: 0.3rem;
  padding: 0 auto;
  display: flex;
  .form__label {
    margin-bottom: 0.1rem;
    font-weight: 700;
  }
  .form__control {
    display: block;
    width: 100%;
    padding: 0.25rem 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
`
