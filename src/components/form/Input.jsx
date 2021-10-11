import React, { useEffect } from "react"

export function Input({ name, label, password, autofocus, handleChange }) {
  useEffect(() => {
    console.log("Input component")
  }, [])
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={password ? "password" : "text"}
        name={name}
        onChange={(e) => handleChange(e)}
        className="form-control"
        autoFocus={autofocus ? true : false}
        required={true}
      />
    </div>
  )
}
