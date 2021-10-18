import { Iproduct } from "models/Product"
import React, { useContext, useState } from "react"
import { handleIChange } from "utils"
import ProductContext from "context/ProductContext"
import "./InputProduct.css"

interface props {
  name: any
  label: any
  number?: any
  product: Iproduct
  setProduct: any
}

function InputProduct({ name, label, number, product, setProduct }: props) {
  const [isSet, setIsSet] = useState(false)
  const { dfProduct, setDfProduct }: any = useContext(ProductContext)

  const setField = (e: React.MouseEvent<HTMLButtonElement>, ev: string) => {
    setIsSet(!isSet)
    if (!isSet) {
      setDfProduct({ ...dfProduct, [name]: eval(`product.${name}`) })
      console.log(dfProduct)
    } else {
      setDfProduct({ ...dfProduct, [name]: "" })
      console.log(dfProduct)
    }
  }
  return (
    <div className="form__group">
      <label className="form__label">
        {label}
        <input
          type={number ? "number" : number ? number : "text"}
          name={name}
          step={number === "decimal" ? 0.01 : 1}
          onChange={(e) => handleIChange(e, product, setProduct)}
          value={eval(`product.${name}`)}
          className="form__control"
          required
          readOnly={isSet ? true : false}
        />
      </label>
      <button
        type="button"
        onClick={(e) => setField(e, eval(`product.${name}`))}
        className="inputproduct__btn"
      >
        {isSet ? <b>fijado</b> : "fijar"}
      </button>
    </div>
  )
}
export default React.memo(InputProduct)
