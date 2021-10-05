import React, { useRef } from "react"
import { Nav, ProductForm, ProductsSeller } from "components"
import { useShowUpdate } from "state"

export function Product() {
  const productInput = useRef()

  const { showUpdate, setshowUpdate } = useShowUpdate()
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ProductForm
              productInput={productInput}
              showUpdate={showUpdate}
              setshowUpdate={setshowUpdate}
            />
          </div>
          <div className="col-md-8">
            <div className="row">
              <ProductsSeller
                showUpdate={showUpdate}
                setshowUpdate={setshowUpdate}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
