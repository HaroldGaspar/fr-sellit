import React, { Suspense } from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { Home, Cart, Product } from "pages"
import { Auth } from "pages"
import { ProductsDtContextProvider } from "context"
import { ProductContextProvider } from "context/ProductContext"
import { Nav, SearchResults, Detail } from "components"
import "./App.css"

// const Product = React.lazy(() => import("pages"))

function App() {
  return (
    <Router>
      <Switch>
        {/* <Suspense fallback={null}> */}
        <Route path="/login" exact>
          <Auth login={true} />
        </Route>
        <Route path="/register" exact>
          <Auth login={false} />
        </Route>
        <Route path="/" exact component={Home} />
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
        <Route path="/cart" exact>
          <ProductsDtContextProvider>
            <Cart />
          </ProductsDtContextProvider>
        </Route>
        <Route path="/about">"about"</Route>
        <Route path="/contact">"Users"</Route>
        <Route path="/search/:keyword" exact component={SearchResults} />

        <Route path="/product/:id" exact component={Detail} />

        {/* </Suspense> */}
      </Switch>
    </Router>
  )
}

export default App
