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
      {/* <div className="form__group"> */}
      <label className="form__label">
        <div className="form__oneline">
          {label}
          {isSet ? <small>fijado</small> : null}
        </div>
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
        className={isSet ? "inputproduct__btn boru" : "inputproduct__btn"}
      >
        <img
          src={process.env.PUBLIC_URL + "/img/pin2.svg"}
          alt="pin"
          className={isSet ? "form__svg 120p" : "form__svg"}
        />
      </button>
      {/* </div> */}
    </InpProduct>
  )
}
export default React.memo(InputProduct)

const InpProduct = styled.div`
  margin-bottom: 0.3rem;
  padding: 0 auto;
  display: flex;
  width: 100%;

  .form__label {
    margin-bottom: 0.1rem;
    font-weight: 700;
    width: -webkit-fill-available;
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
    height: 100%;
    font-size: 13px;
    align-self: end;
    margin-left: 0.25rem;
    margin-bottom: 0.1rem;
    border-radius: 0.25rem;
    background: none;
  }

  .form__svg {
    height: 33px;
    width: 100%;
  }

  .boru {
    background-color: rgba(0, 0, 0, 0.4);
    img {
      // zoom: 110%;
    }
  }

  .inputproduct__btn:hover {
    background-color: rgba(0, 0, 0, 0.4);
    color: #eee;
  }
  .form__oneline {
    display: flex;
    justify-content: space-between;
    small {
      font-style: italic;
      color: darkmagenta;
      align-self: center;
    }
  }
`
