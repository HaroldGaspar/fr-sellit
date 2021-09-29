import React from "react";

export function Singup() {
  const singUp=(e)=>{
    e.prevenDefault();
    console.log("registrado");
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="my-4 text-center d-block col-12">
            <b className="logo">SELLIT</b>
          </div>
          <div className="col-md-4 mx-auto">
            <div className="card">
              {/* <div className="card-header">Crear cuenta</div> */}
              <span className="form-title">Crear cuenta</span> 
              <div className="card-body">
                <form onSubmit={e=>singUp(e)}>
                  <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                      autoFocus
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password-confirm">
                      Confirma tu contraseña
                    </label>
                    <input
                      type="password"
                      name="password-confirm"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Address">Direccion de tu tienda</label>
                    <input
                      type="text"
                      name="Address"
                      className="form-control"
                      required
                    />
                  </div>
                  <button className="btn btn-secondary btn-block">SignUp</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
