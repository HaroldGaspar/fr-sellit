import React from "react"
import { handleIChange } from "utils"
// import "./Form.css";

export function InputProduct({
  name,
  label,
  number,
  autofocus,
  product,
  setProduct
}) {
  return (
    <div className="form__group">
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <input
        type={number ? "number" : "text"}
        name={name}
        onChange={(e) => handleIChange(e, product, setProduct)}
        value={eval(`product.${name}`)}
        autoFocus={autofocus ? true : false}
        className="form__control"
      />
    </div>
  )
}
