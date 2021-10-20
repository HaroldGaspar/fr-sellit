import { Iproduct } from "models/Product"
import React, { Dispatch, SetStateAction, useContext } from "react"
// import "./ProdBtnForm.css"
import ProductContext from "context/ProductContext"
import styled from "styled-components"

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
            <FormBtnupdate>Actualizar</FormBtnupdate>
            <FormBtncancel
              value="Cancelar"
              type="button"
              onClick={() => disableEdit()}
            />
          </>
        ) : (
          <FormBtnadd>Guardar</FormBtnadd>
        )}
      </div>
    </>
  )
}

export default React.memo(Buttons)

const FormBtnadd = styled.button`
  display: block;
  width: 100%;
  font-weight: 700;
  padding: 0.6rem 0.75rem;
  transition: 0.15s ease all;

  color: #8b6f97;
  border: 1px solid #8b6f97;
  border-radius: 5px;
  &:hover {
    background-color: #8b6f97;
    color: #eee;
  }
`

const FormBtnupdate = styled.button`
  display: block;
  width: 100%;
  font-weight: 700;
  padding: 0.4rem 0.75rem;
  transition: 0.3s ease all;

  color: #8b6f97;
  border: 1px solid #8b6f97;
  border-radius: 5px 0 0 5px;
  &:hover {
    background-color: #b998c7;
    border: 1px solid #b998c7;
    color: #eee;
  }
`

const FormBtncancel = styled.input`
  display: block;
  width: 100%;
  font-weight: 700;
  padding: 0.4rem 0.75rem;
  background-color: #aaa;
  color: #eee;
  transition: 0.15s ease all;
  border: transparent;

  border-radius: 0 5px 5px 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`
