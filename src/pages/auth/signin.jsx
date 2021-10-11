import { NavLink, useHistory } from "react-router-dom"
import { Input } from "components"
import { singIn } from "services"

export function Singin({ user, setUser, setloading }) {
  let history = useHistory()
  // const [user, setUser] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  return (
    <>
      <div className="cardauth">
        <div className="cardauth__title">Iniciar Sesión</div>

        <div className="cardauth__body">
          <form onSubmit={(e) => singIn(e, history, user, setloading)}>
            <Input
              name={"email"}
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
