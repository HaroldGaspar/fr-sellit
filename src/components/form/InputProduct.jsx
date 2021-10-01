import React from "react";
import { handleIChange } from "../../utils";

export function InputProduct({ name, label, number, autofocus, props }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={number ? "number" : "text"}
        name={name}
        onChange={(e) => handleIChange(e, props)}
        value={eval(`props.product.${name}`)}
        autoFocus={autofocus ? true : false}
        className="form-control"
      />
    </div>
  );
}
