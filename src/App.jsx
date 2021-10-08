import React from "react"
import "./App.css"
import { Suspense, useEffect } from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { Home, Cart, Product } from "pages"
import Auth from "pages/auth"
import { ProductsContextProvider } from "context"
import { ProductContextProvider } from "context/ProductContext"
import { Nav } from "components/Nav"
import { SearchResults } from "components/customer/SearchResult"
import { Detail } from "components/customer/Detail"

// const Product = React.lazy(() => import("pages"))

function App() {
  useEffect(() => {
    console.log("start")
    // return alert('mngmnt tasks ending')//just when the component is killing
  }, [])

  return (
    <Router>
      <Switch>
        {/* <Suspense fallback={null}> */}
        <Route path="/about">"about"</Route>
        <Route path="/contact">"Users"</Route>
        <Route path="/login" exact>
          <Auth login={true} />
        </Route>
        <Route path="/register" exact>
          <Auth login={false} />
        </Route>
        <Route path="/products">
          {localStorage.getItem("store") ? (
            <>
              <Nav />
              {/* <ProductsContextProvider> */}
              <Product />
              {/* </ProductsContextProvider> */}
            </>
          ) : (
            <Home />
          )}
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/search/:keyword" exact>
          <SearchResults />
        </Route>
        <Route path="/product/:id" exact>
          <Detail />
        </Route>
        {/* </Suspense> */}
      </Switch>
    </Router>
  )
}

export default App
