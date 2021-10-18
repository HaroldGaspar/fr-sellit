import { NavLink, useHistory } from "react-router-dom"
import { AuthInput } from "components"
import { singIn } from "services"
import React, { ChangeEvent } from "react"

export function Singin({ user, setUser, setloading }: any) {
  let history = useHistory()
  // const [user, setUser] = useState({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  return (
    <>
      <div className="cardauth">
        <div className="cardauth__title">Iniciar Sesión</div>

        <div className="cardauth__body">
          <form onSubmit={(e) => singIn(e, history, user, setloading)}>
            <AuthInput
              name={"email"}
              label={"Email"}
              autofocus={true}
              handleChange={handleChange}
            />
            <AuthInput
              name={"password"}
              label={"Contraseña"}
              password={true}
              handleChange={handleChange}
            />
            <button className="cardauth__btn">Iniciar sesion</button>
          </form>
          <hr />
          <div className="form-footer">
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
    </>
  )
}