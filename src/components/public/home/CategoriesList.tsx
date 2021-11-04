import React, { ChangeEvent, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { getCategories } from "services"

export function CategoriesList() {
  const history = useHistory()
  const [categoris, setCategories] = useState<string[]>([])

  //update state which send to add/upd SERVICE
  const handleIChange = (e: ChangeEvent<HandleInputChange>) => {
    const { value } = e.target
    history.push(`/category/${value}`)
  }

  useEffect(() => {
    getCategories(setCategories)
  }, [])

  return (
    <div className="form__label">
      Categoria
      <select
        name="category"
        onChange={(e) => handleIChange(e)}
        className="form__control"
        autoFocus
      >
        <option key={0} value={0}>
          sin categoria
        </option>
        {categoris.map((e, i) => (
          <option key={i + 1} value={i + 1}>
            {e}
          </option>
        ))}
      </select>
    </div>
  )
}
type HandleInputChange =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement
