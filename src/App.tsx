import React, { Suspense, useEffect, useState } from "react"
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom"
import { Home, Cart, Category, Invoice, Mailcr, Profile } from "pages"
import { Auth } from "pages"
import { ProductsDtContextProvider } from "context"
import { ProductContextProvider } from "context/ProductContext"
import { SearchResults } from "components"
import "./App.css"
import { Store } from "pages/public/store"
import { Product as ProductDT } from "pages/public/Product"
import { Product } from "pages/seller/product"

// const Product = React.lazy(() => import("pages"))
document.title = "sellit | store"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Auth login={true} />
        </Route>
        <Route path="/register" exact>
          <Auth login={false} />
        </Route>
        <Route path="/" exact component={Home} />
        <Route
          path="/products"
          render={() => {
            return localStorage.getItem("store") !== null ? (
              <Product />
            ) : (
              <Redirect to="/" />
            )
          }}
        />
        <Route path="/about">"about"</Route>
        <Route path="/contact">"Users"</Route>
        <Route path="/search/:keyword" exact component={SearchResults} />
        <Route path="/store/:id" exact component={Store} />
        <Route path="/category/:id" exact component={Category} />
        <Route path="/invoice" exact component={Invoice} />
        <Route path="/mailconfimation-required" exact component={Mailcr} />
        <Route path="/vtfm/:tk" exact component={Mailcr} />
        <Route
          path="/user"
          exact
          render={() => {
            return localStorage.getItem("customer") !== null ? (
              <Profile />
            ) : (
              <Redirect to="/" />
            )
          }}
        />
        <ProductsDtContextProvider>
          <Route
            path="/cart"
            exact
            render={() => {
              return localStorage.getItem("customer") !== null ? (
                <Cart />
              ) : (
                <Redirect to="/" />
              )
            }}
          />
          <Route path="/product/:id" exact component={ProductDT} />
        </ProductsDtContextProvider>
        {/* THIRD SPRINT */}
      </Switch>
    </Router>
  )
}

export default App
