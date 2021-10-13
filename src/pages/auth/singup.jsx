import React, { useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import { AuthInput } from "components"
import { signUp } from "services"

export function Singup({ user, setUser, setloading }) {
  let history = useHistory()
  const [seller, setSeller] = useState(false)

  //handle
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleStore = (e) => {
    setSeller(!seller)
  }

  return (
    <div className="cardauth">
      <span className="form__title">
        Crear cuenta{" "}
        {seller ? <span className="form__subtitle">vendedor</span> : null}{" "}
      </span>
      <div className="cardauth__body">
        <form onSubmit={(e) => signUp(e, user, history, setloading)}>
          <AuthInput
            name={"username"}
            label={"Nombre de usuario"}
            autofocus={true}
            handleChange={handleChange}
          />
          <AuthInput
            name={"email"}
            label={"Email"}
            handleChange={handleChange}
          />
          <AuthInput
            name={"password"}
            label={"Contraseña"}
            password={true}
            handleChange={handleChange}
          />
          <AuthInput
            name={"password-confirm"}
            label={"Confirma tu contraseña"}
            password={true}
            handleChange={handleChange}
          />
          <button type="button" onClick={handleStore} className="qstn tss">
            {seller ? "Soy usuario" : "Eres vendedor?"}
          </button>
          <span className={seller ? "isseller" : "iscustomer"}>
            <AuthInput
              name={"store_name"}
              label={"Nombre de tu tienda"}
              handleChange={handleChange}
            />
          </span>
          <button className="cardauth__btn">
            <span className="over">Registrate</span>
          </button>
        </form>
        <hr />
        <div className="form-footer">
          <p>
            <b>Ya estas registrado?</b> Haz click
            <NavLink to="/login"> aqui</NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}
