import React, { useCallback, useEffect, useRef, useState } from "react"
import { GifsList, Spinner } from "components"
import { useGifs, useNearScreen } from "hooks"
import debounce from "just-debounce-it"
import { searchProduct } from "services"
import { useHistory, useParams } from "react-router"
import ProductHome from "./ProductHome"
import { Nav } from "components/Nav"

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

      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3>
            Search <b>{keyword}</b>
          </h3>
          {/* <GifsList gifs={gifs} /> */}
          {products.map((product) => (
            <ProductHome product={product} />
          ))}
        </>
      )}
      <br />
      {/* <button onClick={handleNextPage}>Get next page</button> */}
    </>
  )
}
