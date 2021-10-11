import React from "react"
import { handleIChange } from "utils"
// import "./Form.css";

function InputProduct({ name, label, number, autofocus, product, setProduct }) {
  return (
    <div className="form__group">
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <input
        type={number ? "number" : number ? number : "text"}
        name={name}
        step={0.01}
        onChange={(e) => handleIChange(e, product, setProduct)}
        value={eval(`product.${name}`)}
        autoFocus={autofocus ? true : false}
        className="form__control"
        required
      />
    </div>
  )
}
export default React.memo(InputProduct)
