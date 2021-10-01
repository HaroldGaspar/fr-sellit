import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Input } from "../components";

export function Singin({ user, setUser }) {
  let history = useHistory();
  // const [user, setUser] = useState({});
  const login = async (e) => {
    e.preventDefault();

    console.log("data ", JSON.stringify(user));
    const parseJwt = (token) => {
      try {
        return JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        return null;
      }
    };

    //login
    const res = await fetch("http://localhost:8000/auth/local", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ ...user }),
    });
    //set token
    const json = await res.json();
    if (json) {
      localStorage.setItem("token", json.jwt);
      history.push("/");
    }
    //fetch userdata
    const userId = parseJwt(json.jwt).id;
    const resUser = await fetch(`http://localhost:8000/users/${userId}`, {
      method: "get",
      headers: new Headers({
        Authorization: `Bearer ${json.jwt}`,
      }),
    });
    const userD = await resUser.json();
    const userID = userD.id;
    console.log(userID);
    console.log("user ", userD);

    //find customer
    const resCustomer = await fetch(
      `http://localhost:8000/customers?user=${userID}`,
      {
        headers: new Headers({
          Authorization: `Bearer ${json.jwt}`,
        }),
      }
    );
    const customerD = await resCustomer.json();
    const customerID = customerD[0].id;
    console.log(customerID);
    console.log("customer: ", customerD);

    //store
    const resStore = await fetch(
      `http://localhost:8000/stores?customer=${customerID}`,
      {
        headers: new Headers({
          Authorization: `Bearer ${json.jwt}`,
        }),
      }
    );
    const storeD = await resStore.json();
    console.log("store ", storeD.id);
    localStorage.setItem("store", storeD[0].id);

    console.log("login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // if (!props.task.id)
    //     document.title= 'creating task'
  };

  return (
    <div className="card col-md-4 mx-auto">
      <span className="form-title">Iniciar Sesión</span>

      <div className="card-body">
        <form onSubmit={(e) => login(e)}>
          <Input
            name={"identifier"}
            label={"Email"}
            autofocus={true}
            handleChange={handleChange}
          />
          <Input
            name={"password"}
            label={"Contraseña"}
            password={true}
            handleChange={handleChange}
          />
          <button className="btn btn-secondary btn-block my-4">
            Iniciar sesion
          </button>
        </form>
        <hr />
        <div className="card-body form-footer">
          <p>
            <b>No estas registrado?</b> registrate
            <NavLink to="/register"> Aqui</NavLink>
          </p>
          <p>
            <b>Haz olvidado tu contraseña?</b> Haz click
            <NavLink to="/"> aqui</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
