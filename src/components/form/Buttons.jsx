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
      <div className="d-flex">
        {showUpdate ? (
          <>
            <button className="form__btn-update">Actualizar</button>
            <input
              value="Cancelar"
              type="button"
              onClick={() => disableEdit(props, setProduct)}
              className="form__btn-cancel"
            />
          </>
        ) : (
          <button className="form__btn-add">Guardar</button>
        )}
      </div>
    </>
  )
}

export default React.memo(Buttons)
