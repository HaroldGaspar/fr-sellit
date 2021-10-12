import React, { Suspense, useEffect, useState } from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { Home, Cart, Product, Category } from "pages"
import { Auth } from "pages"
import { ProductsDtContextProvider } from "context"
import { ProductContextProvider } from "context/ProductContext"
import { Nav, SearchResults, Detail } from "components"
import "./App.css"
import { Store } from "pages/customer/store"
import { ProductDetail } from "components/customer/find/ProductDetail"

// const Product = React.lazy(() => import("pages"))
document.title = "sellit | store"

function App() {
  const [changed, setChanged] = useState(false)
  // useEffect(console.log("eru"), [])
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
          {/* {localStorage.getItem("store") ? ( */}
          <>
            <Nav />
            <Product />
          </>
          {/* ) : (
            <Home />
          )} */}
        </Route>
        <Route path="/cart" exact>
          <ProductsDtContextProvider>
            <Cart />
          </ProductsDtContextProvider>
        </Route>
        <Route path="/about">"about"</Route>
        <Route path="/contact">"Users"</Route>
        <Route path="/search/:keyword" exact component={SearchResults} />

        <Route path="/product/:id" exact component={ProductDetail} />
        <Route path="/store/:id" exact component={Store} />
        {/* <Route path="/store/:id" exact component={Store} /> */}
        <Route path="/category/:id" exact>
          <Category />
        </Route>
        {/* </Suspense> */}

        {/* THIRD SPRINT */}
      </Switch>
    </Router>
  )
}

export default App
