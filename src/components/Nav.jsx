import React, { useEffect, useState } from "react";

//nav
import { NavLink } from "react-router-dom";

export function Nav(props) {
  const [logout, setlogout] = useState();
  const [store, setstore] = useState(false);
  const logOutfx = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("store");
    localStorage.removeItem("cart");
    console.log("logout");
    setlogout(false);
  };
  const delay = () => {
    setTimeout(console.log("ssss"), 2000);
  };

  useEffect(() => {
    setlogout(localStorage.getItem("token"));
    setstore(localStorage.getItem("store"));

    console.log("logout", logout);
  }, [logout, store]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        SELLIT
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav w-100">
          <li className="nav-item">
            <div className="card">
              <form action="" className="">
                <input
                  className="search"
                  type="text"
                  placeholder="Que estas buscando..."
                />
                <button className="btn btn-secondary">Buscar</button>
              </form>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              SURPRISE ME{" "}
            </NavLink>
          </li>

          {store ? (
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                PRODUCTS{" "}
              </NavLink>
            </li>
          ) : (
            ""
          )}
          <span className="ml-auto">
            {logout ? (
              <div className="navbar">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products">
                    CUENTA{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    CARRITO{" "}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/"
                    onClick={(e) => logOutfx(e)}
                  >
                    LOGOUT{" "}
                  </NavLink>
                  {/* <input value="Cancelar" type="button" className="nav-item" /> */}
                </li>
              </div>
            ) : (
              <>
                <li className="nav-item ml-auto">
                  <NavLink className="nav-link" to="/login">
                    INGRESAR{" "}
                  </NavLink>
                </li>
              </>
            )}
          </span>
        </ul>
      </div>
    </nav>
  );
}
