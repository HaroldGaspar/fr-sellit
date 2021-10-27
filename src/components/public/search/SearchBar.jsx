import React, { useState } from "react"
import { useHistory } from "react-router"
import styled from "styled-components"


export function SearchBar() {
  const [keyword, setKeyword] = useState("")
  const history = useHistory()

  const handleSearch = (e) => {
    history.push(`/search/${keyword}`)
  }

  return (
    <Search onSubmit={(e) => handleSearch(e)} className="search">
      <SearchInput
        type="text"
        placeholder="Que estas buscando..."
        onChange={(e) => setKeyword(e.target.value)}
      />
      <SearchBtn>Buscar</SearchBtn>
    </Search>
  )
}
const SearchInput = styled.input`
  height: 2.5em;
  padding: 0.375rem 0.75rem;
  margin-left: 1em;
  font-size: 1.1em;
  font-weight: 400;
  color: #666;
  background-color: #ebede6;
  transition: border-color 0.15s;
  border: none;
  vertical-align: middle;
  border-radius: 0.2rem 0 0 0.2rem;
  outline: none;
  &:hover {
    outline: none;
  }
`
const SearchBtn = styled.button`
  margin-right: 1em;
  font-size: 1.1em;
  height: 2.5em;
  background-color: #cad2b5;
  border: 0;
  vertical-align: middle;
  border-radius: 0 0.2rem 0.2rem 0;
  transition: ease 0.3s;
  &:hover {
    background-color: #4d4d4d;
    color: #cad2b5;
  }
`
const Search = styled.form`
  text-align: center;
`