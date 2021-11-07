import { Iproduct } from "models/Product"
import React, { useContext, useState } from "react"
import { handleIChange } from "utils"
import ProductContext from "context/ProductContext"
// import "./InputProduct.css"
import styled from "styled-components"

interface props {
  name: any
  label: any
  number?: any
  product: Iproduct
  setProduct: any
}

function InputProduct({ name, label, number, product, setProduct }: props) {
  const [isSet, setIsSet] = useState(false)
  const { dfProduct, setDfProduct }: any = useContext(ProductContext)

  const setField = (e: React.MouseEvent<HTMLButtonElement>, ev: string) => {
    setIsSet(!isSet)
    if (!isSet) {
      setDfProduct({ ...dfProduct, [name]: eval(`product.${name}`) })
      console.log(dfProduct)
    } else {
      setDfProduct({ ...dfProduct, [name]: "" })
      console.log(dfProduct)
    }
  }
  return (
    <InpProduct>
      <div className="form__group">
        <label className="form__label">
          {label}
          <input
            type={number ? "number" : number ? number : "text"}
            name={name}
            step={number === "decimal" ? 0.01 : 1}
            onChange={(e) => handleIChange(e, product, setProduct)}
            value={eval(`product.${name}`)}
            className="form__control"
            required
            readOnly={isSet ? true : false}
          />
        </label>
        <button
          type="button"
          onClick={(e) => setField(e, eval(`product.${name}`))}
          className="inputproduct__btn"
        >
          {isSet ? <b>fijado</b> : "fijar"}
        </button>
      </div>
    </InpProduct>
  )
}
export default React.memo(InputProduct)

const InpProduct = styled.div`
  .form__group {
    margin-bottom: 0.3rem;
    padding: 0 auto;
    display: flex;
  }
  /* input button */
  .form__label {
    margin-bottom: 0.1rem;
    font-weight: 700;
  }

  .form__control {
    // display: block;
    width: 100%;
    padding: 0.25rem 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }

  .form__control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #b69ebb;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgb(70 50 255 / 45%);
  }

  .form__groupimg {
    margin-bottom: 0.3rem;
    justify-content: center;
  }

  input .form__control {
    height: 2.5em;
  }

  .input-image__btn-sumbit {
    display: none;
  }

  .inputproduct__btn {
    border: none;
    padding: 0.6em 1em;
    margin: auto 0.3em 0.1em 0.3em;
    height: 100%;
    font-size: 13px;
  }

  .inputproduct__btn:hover {
    background-color: rgba(0, 0, 0, 0.4);
    color: #eee;
  }
`
