import React, { useState } from "react"
import { useHistory } from "react-router"
import "./Search.css"
export function SearchBar() {
  const [keyword, setKeyword] = useState("")
  const history = useHistory()

  const handleSearch = (e) => {
    history.push(`/search/${keyword}`)
  }

  return (
    <form onSubmit={(e) => handleSearch(e)} className="">
      <input
        className="search__input"
        type="text"
        placeholder="Que estas buscando..."
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="search__btn">Buscar</button>
    </form>
  )
}
