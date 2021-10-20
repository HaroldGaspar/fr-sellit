import { Spinner } from "components"
import { useLastestProducts } from "hooks"
import { useNearScreen } from "hooks/useNearScreen"
import debounce from "just-debounce-it"
import { useCallback, useEffect, useRef } from "react"
import styled from "styled-components"

import ProductHome from "./ProductHome"

const ListLatest = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0 15px;
  /* min-height: 100vh; */
  align-items: center;
`

const ListOfHomeItem = styled.div`
  background-color: red;
  /* display: inline-block; */
  width: 100%;
`

export function LastProducts() {
  const { loading, products, setPage, loadingNextPage } = useLastestProducts()
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  //debounce console.log("next page")
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 1000),
    [setPage]
  )

  //this is in lop for that requires an debounce
  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
    // console.log('isNearScreen',isNearScreen)
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      <h2>Ultimos Productos</h2>
      <ListLatest>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {products.map((product, id) => (
              <ProductHome product={product} key={id} />
            ))}
            {loadingNextPage ? <h1>loading more products</h1> : null}
            <div id="pagination-ref" ref={externalRef}></div>
          </>
        )}
        {/* <button onClick={handleNextPage}>Get next page</button> */}
      </ListLatest>
    </>
  )
}
