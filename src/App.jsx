import "./App.css";
import { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Product, Home, Login, Singin, Singup } from "./pages";

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
          <Singin />
        </Route>

        <Route path="/products">
          <Product />
        </Route>
        <Route path="/register" exact>
          <Singup />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
