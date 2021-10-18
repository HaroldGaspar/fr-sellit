import { Iproduct } from "models/Product"
import React, { Dispatch, SetStateAction, useContext } from "react"
import "./ProdBtnForm.css"
import ProductContext from "context/ProductContext"

interface props {
  productInput: any
}

function Buttons({ productInput }: props) {
  const { showUpdate, setshowUpdate, setProduct }: any =
    useContext(ProductContext)

  //cancel showUpdate
  function disableEdit() {
    setProduct({
      id: 0,
      category: 0,
      name: "",
      mark: "",
      price: 0,
      description: "",
      stock: 0
    })
    setshowUpdate(false)
    productInput?.current?.focus()
  }

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
