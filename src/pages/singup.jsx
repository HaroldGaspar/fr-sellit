import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Input } from "../components";

export function Singup({ user, setUser }) {
  let history = useHistory();
  const [store, setStore] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("registrado");
    console.log(user);

    //password confirm in the backend
    //persist user
    const resUser = await fetch("http://localhost:8000/users", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ ...user }),
    });
    const userD = await resUser.json();
    console.log("user ", userD);

    //login
    const resL = await fetch("http://localhost:8000/auth/local", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        identifier: user.email,
        password: user.password,
      }),
    });
    //set token
    const json = await resL.json();
    if (json) {
      localStorage.setItem("token", json.jwt);
      history.push("/");
    }

    //gettoken

    //persist customer
    const resCustomer = await fetch("http://localhost:8000/customers", {
      method: "post",
      headers: new Headers({
        Authorization: `Bearer ${json.jwt}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        isSeller: true,
        user: userD.id,
      }),
    });
    const customerD = await resCustomer.json();
    console.log("customer: ", customerD.id);

    //persiste store
    const resStore = await fetch("http://localhost:8000/stores", {
      method: "post",
      headers: new Headers({
        Authorization: `Bearer ${json.jwt}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        name: store,
        customer: customerD.id,
      }),
    });
    const storeD = await resStore.json();
    console.log("store ", storeD.id);
    localStorage.setItem("store", storeD.id); //filtrar los productos por tienda para la vista del seller
  };

  //handle
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleStore = (e) => {
    setStore(e.target.value);
  };

  return (
    <div className="card col-md-4 mx-auto">
      <span className="form-title">Crear cuenta</span>
      <div className="card-body">
        <form onSubmit={(e) => onSubmit(e)}>
          <Input
            name={"username"}
            label={"Nombre de usuario"}
            autofocus={true}
            handleChange={handleChange}
          />
          <Input name={"email"} label={"Email"} handleChange={handleChange} />
          <Input
            name={"password"}
            label={"Contraseña"}
            password={true}
            handleChange={handleChange}
          />
          <Input
            name={"password-confirm"}
            label={"Confirma tu contraseña"}
            password={true}
            handleChange={handleChange}
          />
          <Input
            name={"store-name"}
            label={"Nombre de tu tienda"}
            handleChange={handleStore}
          />
          <button className="btn btn-secondary btn-block my-4">SignUp</button>
        </form>
        <hr />
        <div className="card-body form-footer">
          <p>
            <b>Ya estas registrado?</b> Haz click
            <NavLink to="/login"> aqui</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
