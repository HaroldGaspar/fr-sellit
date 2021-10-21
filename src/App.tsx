import React, { Suspense } from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { Home, Cart, Category } from "pages"
import { Auth } from "pages"
import { ProductsDtContextProvider } from "context"
import { ProductContextProvider } from "context/ProductContext"
import { SearchResults } from "components"
import "./App.css"
import { Store } from "pages/customer/store"
import { ProductDetail } from "components/public/find/ProductDetail"
import { Product } from "pages/seller/product"

// const Product = React.lazy(() => import("pages"))
document.title = "sellit | store"

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
        <Route path="/products" component={Product} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/about">"about"</Route>
        <Route path="/contact">"Users"</Route>
        <Route path="/search/:keyword" exact component={SearchResults} />
        <Route path="/product/:id" exact component={ProductDetail} />
        <Route path="/store/:id" exact component={Store} />
        {/* <Route path="/test" exact component={Store} /> */}
        <Route path="/category/:id" exact component={Category} />
        {/* </Suspense> */}
        {/* THIRD SPRINT */}
      </Switch>
    </Router>
  )
}

export default App
