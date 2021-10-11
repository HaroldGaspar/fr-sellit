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
      <div className="card col-md-4 mx-auto">
        <span className="form-title">Iniciar Sesión</span>

        <div className="card-body">
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
    </>
  )
}
