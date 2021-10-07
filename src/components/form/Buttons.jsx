import React from "react"

function Buttons({
  props,
  setProduct,
  setshowUpdate,
  productInput,
  showUpdate
}) {
  function disableEdit() {
    setProduct({
      id: 0,
      category: "",
      name: "",
      mark: "",
      price: "",
      description: "",
      stock: ""
    })
    setshowUpdate(false)
    productInput?.current?.focus()
  }

  // console.log("button", showUpdate)
  // console.log("button", setProduct)
  return (
    <>
      {showUpdate ? (
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

export default React.memo(Buttons)
