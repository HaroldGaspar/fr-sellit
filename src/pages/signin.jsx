import React from "react";
// import { NavLink } from "react-router-dom";

export function Singin() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="my-4 text-large">
            <b>SELLIT</b>
          </div>
          <div className="col-md-4 mx-auto">
            <div className="card">
              <div className="card-header">Iniciar sesion</div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                    />
                  </div>
                  <button className="btn btn-primary btn-block">SignUp</button>
                </form>
              </div>
              <hr />
              <p>
                <b>No estas registrado?</b> registrate
              </p>
              <p>
                <b>Haz olvidado tu contraseña?</b> haz click
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
