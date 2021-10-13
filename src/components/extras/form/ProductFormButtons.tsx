import React from "react"
import "./ProdBtnForm.css"

interface props {
  setshowUpdate: any
  setProduct: any
  productInput: any
  showUpdate: any
}

function Buttons({
  setshowUpdate,
  setProduct,
  productInput,
  showUpdate
}: props) {
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
              onClick={() => disableEdit()}
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
