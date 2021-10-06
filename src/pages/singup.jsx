import React from "react"
import { NavLink, useHistory } from "react-router-dom"
import { Input } from "components"
import { signUp } from "services"

export function Singup({ user, setUser, setloading }) {
  let history = useHistory()

  //handle
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  return (
    <div className="card col-md-4 mx-auto">
      <span className="form-title">Crear cuenta</span>
      <div className="card-body">
        <form onSubmit={(e) => signUp(e, user, history, setloading)}>
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
            name={"store_name"}
            label={"Nombre de tu tienda"}
            handleChange={handleChange}
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
  )
}
