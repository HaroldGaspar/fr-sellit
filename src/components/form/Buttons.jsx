import React from "react"
import { disableEdit } from "utils"

export function Buttons({ props, setProduct }) {
  console.log("button", props.showUpdate)
  console.log("button", setProduct)
  return (
    <>
      {props.showUpdate ? (
        <div className="d-flex">
          <button className="btn btn-outline-info col-6 py-2">
            Actualizar
          </button>
          <input
            value="Cancelar"
            type="button"
            onClick={() => disableEdit(props, setProduct)}
            className="btn btn-secondary col-6 ml-auto"
          />
        </div>
      ) : (
        <button className="btn btn-outline-success btn-block">Guardar</button>
      )}
    </>
  )
}
