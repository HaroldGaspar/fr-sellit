import "./App.css";
import { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Product, Home, Login } from "./pages";
import { Singin } from "./pages/signin";
import { Singup } from "./pages/singup";

function App() {
  useEffect(() => {
    console.log("start");
    // return alert('mngmnt tasks ending')//just when the component is killing
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">"about"</Route>
        <Route path="/contact">"Users"</Route>

        <Route path="/products">
          <Product />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Singup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
