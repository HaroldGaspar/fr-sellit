import React, { ChangeEvent, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { getCategories } from "services"
import styled from "styled-components"

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
    <CategoriesListStyle>
      {/* Categoria */}
      <select
        name="category"
        onChange={(e) => handleIChange(e)}
        className="form__control"
        autoFocus
      >
        <option key={0} value={0}>
          Escoge una categoria
        </option>
        {categoris.map((e, i) => (
          <option key={i + 1} value={i + 1}>
            {e}
          </option>
        ))}
      </select>
    </CategoriesListStyle>
  )
}
type HandleInputChange =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement

const CategoriesListStyle = styled.div`
  select::-ms-expand {
    display: none;
  }
  select {
    appearance: none;
    background-color: transparent;
    border: none;
    // width: 100%;
    outline: none;
    cursor: pointer;
    padding: 0.15em 1em;
  }
  margin: 0.25em 0;
  appearance: none;
  border: 1px solid #ccc;
  background-color: transparent;
  border-radius: 0.25em;
  width: 20em;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;

  &::after {
    content: "";
    width: 0.8em;
    height: 0.5em;
    background-color: #aaa;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    justify-self: end;
    position: absolute;
    margin-right: 0.5em;
  }
`
