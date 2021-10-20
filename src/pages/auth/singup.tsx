import React, { ChangeEvent, MouseEventHandler, useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import { AuthInput } from "components"
import { signUp } from "services"
import {
  Cardauth,
  CardauthBtn,
  CardauthTitle,
  FormSubtitle,
  FormTitle,
  Iscustomer,
  Qstn
} from "./styles"

export function Singup({ user, setUser, setloading }: any) {
  let history = useHistory()
  const [seller, setSeller] = useState(false)

  //handle
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleStore = () => {
    setSeller(!seller)
  }

  return (
    <Cardauth>
      <FormTitle>
        Crear cuenta {seller ? <FormSubtitle>vendedor</FormSubtitle> : null}{" "}
      </FormTitle>
      <form onSubmit={(e) => signUp(e, user, history, setloading)}>
        <AuthInput
          name={"username"}
          label={"Nombre de usuario"}
          autofocus={true}
          handleChange={handleChange}
        />
        <AuthInput name={"email"} label={"Email"} handleChange={handleChange} />
        <AuthInput
          name={"password"}
          label={"Contraseña"}
          password={true}
          handleChange={handleChange}
        />
        <AuthInput
          name={"password_confirm"}
          label={"Confirma tu contraseña"}
          password={true}
          handleChange={handleChange}
        />
        <Qstn type="button" onClick={handleStore}>
          {seller ? "Soy usuario" : "Eres vendedor?"}
        </Qstn>
        {seller ? (
          <AuthInput
            name={"store_name"}
            label={"Nombre de tu tienda"}
            handleChange={handleChange}
          />
        ) : null}
        <CardauthBtn>
          <span className="over">Registrate</span>
        </CardauthBtn>
      </form>
      <hr />
      <div className="form-footer">
        <p>
          <b>Ya estas registrado?</b> Haz click
          <NavLink to="/login"> aqui</NavLink>
        </p>
      </div>
    </Cardauth>
  )
}
