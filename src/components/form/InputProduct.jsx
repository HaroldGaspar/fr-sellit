import React, { useState } from "react"
import { handleIChange } from "utils"
import "./InputProduct.css"

function InputProduct({
  name,
  label,
  number,
  autofocus,
  product,
  setProduct,
  dfProduct,
  setDfProduct
}) {
  const [isSet, setIsSet] = useState(false)
  const setField = (v) => {
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
          step={0.01}
          onChange={(e) => handleIChange(e, product, setProduct)}
          value={eval(`product.${name}`)}
          autoFocus={autofocus ? true : false}
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
