import React, { useState } from "react"
import { useHistory } from "react-router"
import { searchProduct } from "services"

export function SearchBar() {
  const [keyword, setKeyword] = useState("")
  const history = useHistory()

  const handleSearch = (e) => {
    history.push(`/search/${keyword}`)
  }

  return (
    <li className="nav-item">
      <div className="card">
        <form onSubmit={(e) => handleSearch(e)} className="">
          <input
            className="search"
            type="text"
            placeholder="Que estas buscando..."
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="btn btn-secondary">Buscar</button>
        </form>
      </div>
    </li>
  )
}
