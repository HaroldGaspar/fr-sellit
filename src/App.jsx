import "./App.css";
import { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Product, Home } from "./pages";
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
          <Product />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
