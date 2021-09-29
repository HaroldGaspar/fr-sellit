import React from "react";
import { NavLink } from "react-router-dom";

export function Singin() {
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="my-4 text-center d-block col-12">
            <b className="logo">SELLIT</b>
          </div>
          <div className="col-md-4 mx-auto">
            <div className="card">
              <span className="form-title">Iniciar Sesión</span> 
  
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
                  <button className="btn btn-secondary btn-block">SignUp</button>
                </form>
              </div>
              <hr />
              <div className="card-body form-footer">
              <p>
                <b>No estas registrado?</b> registrate             
                <NavLink to="/register">Aqui</NavLink>
              </p>
              <p>
                <b>Haz olvidado tu contraseña?</b> haz click
                <NavLink to="/">Aqui</NavLink>
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
