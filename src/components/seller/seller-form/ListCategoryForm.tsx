import { MutableRefObject, useEffect, useRef, useState } from "react"
import { getCategories } from "services"

interface props {
  product: any
  setProduct: any
  handleIChange: any
  setCategories: any
  categoris: any
}

export function ListCategoryForm({
  product,
  setProduct,
  handleIChange,
  setCategories,
  categoris
}: props) {
  // const foc = useRef<HTMLSelectElement>()
  // const [categoris, setCategories] = useState([])

  useEffect(() => {
    getCategories(setCategories)
    return () => {
      console.log("UNMOUNT")
    }
  }, [setCategories])

  return (
    <div className="form__group">
      <label className="form__label">
        Categoria
        <select
          name="category"
          onChange={(e) => handleIChange(e, product, setProduct)}
          className="form__control"
          value={product.category.id || 0} //?.id
          autoFocus
        >
          <option key={0} value={0}>
            sin categoria
          </option>
          {categoris.map((e: any, i: number) => (
            <option key={i} value={i + 1}>
              {e}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
