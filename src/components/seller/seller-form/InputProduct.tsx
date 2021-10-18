import { Iproduct } from "models/Product"
import React, { useState } from "react"
import { handleIChange } from "utils"
import "./InputProduct.css"

interface props {
  name: any
  label: any
  number?: any
  product: Iproduct
  setProduct: any
  dfProduct: any
  setDfProduct: any
}

function InputProduct({
  name,
  label,
  number,
  product,
  setProduct,
  dfProduct,
  setDfProduct
}: props) {
  const [isSet, setIsSet] = useState(false)
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
  )
}
export default React.memo(InputProduct)
