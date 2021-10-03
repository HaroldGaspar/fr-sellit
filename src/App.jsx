import "./App.css";
import { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Product, Home, Cart } from "./pages";
import Auth from "./pages/auth";

function App() {
  useEffect(() => {
    console.log("start");
    // return alert('mngmnt tasks ending')//just when the component is killing
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/about">"about"</Route>
        <Route path="/contact">"Users"</Route>
        <Route path="/login" exact>
          <Auth login={true} />
        </Route>
        <Route path="/register" exact>
          <Auth login={false} />
        </Route>

        <Route path="/products">
          {localStorage.getItem("store") ? <Product /> : <Home />}
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
