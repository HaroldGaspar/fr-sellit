import React, { useCallback, useEffect, useRef, useState } from "react"
import { GifsList, Spinner } from "components"
import { useGifs, useNearScreen } from "hooks"
import debounce from "just-debounce-it"
import { searchProduct } from "services"
import { useHistory, useParams } from "react-router"
import ProductHome from "../home/ProductHome"
import { Nav } from "components/public/search/Nav"

import styled from "styled-components"

const ContainerHome = styled.div`
  min-height: 100vh;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 0 11px;
`
const ListLatest = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0 15px;
  /* min-height: 100vh; */
  align-items: center;
`

export function SearchResults() {
  // console.log("props ", props)
  const { keyword } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    searchProduct(keyword, setProducts)
  }, [])
  return (
    <>
      <Nav />
      <ContainerHome>
        <h3>
          Search <b>{keyword}</b>
        </h3>
        <ListLatest>
          {loading ? (
            <Spinner />
          ) : (
            <>
              {products.map((product) => (
                <ProductHome product={product} />
              ))}
            </>
          )}
        </ListLatest>
        <br />
        {/* <button onClick={handleNextPage}>Get next page</button> */}
      </ContainerHome>
    </>
  )
}
