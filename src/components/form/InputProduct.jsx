import React from "react";
import { handleIChange } from "../../utils";
// import "./Form.css";

export function InputProduct({ name, label, number, autofocus, props }) {
  return (
    <div className="form__group">
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <input
        type={number ? "number" : "text"}
        name={name}
        onChange={(e) => handleIChange(e, props)}
        value={eval(`props.product.${name}`)}
        autoFocus={autofocus ? true : false}
        className="form__control"
      />
    </div>
  );
}
