import { ProductHome, Spinner } from "components"
import { useLastestProducts } from "hooks"
import { useNearScreen } from "hooks/useNearScreen"
import debounce from "just-debounce-it"
import { useCallback, useEffect, useRef } from "react"
import "./LastProducts.css"

export function LastProducts() {
  const { loading, products, setPage } = useLastestProducts()
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
    console.log(isNearScreen)
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      <h2>Ultimos Productos</h2>
      <div className=" list-latest ">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {products.map((product, id) => (
              <ProductHome product={product} key={id} />
            ))}
            <div id="pagination-ref" ref={externalRef}></div>
          </>
        )}
        {/* <button onClick={handleNextPage}>Get next page</button> */}
      </div>
    </>
  )
}
