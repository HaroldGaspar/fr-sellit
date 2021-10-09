import React, { useEffect, useState } from "react"

//nav
import { NavLink } from "react-router-dom"
import { SearchBar } from "."
import { logOutfx } from "services"
import "./Nav.css"
export function Nav(props) {
  const [logout, setlogout] = useState()
  const [store, setstore] = useState(false)

  useEffect(() => {
    setlogout(localStorage.getItem("token"))
    setstore(localStorage.getItem("store"))

    console.log("logout", logout)
  }, [logout, store])
  return (
    <nav className="nav navbar-expand-lg navbar-light">
      <NavLink className="nav__brand " to="/">
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
      <div className="collapse navbar-collapse nab__sub" id="navbarNav">
        <ul className="nav__sub navbar-nav">
          <SearchBar />
          <NavLink className="nav__a" to="/contact">
            SURPRISE ME{" "}
          </NavLink>

          {store ? (
            <NavLink className="nav__a" to="/products">
              PRODUCTS{" "}
            </NavLink>
          ) : (
            ""
          )}
          <span className="mlefu-auto">
            {logout ? (
              <div className="nav__sub">
                <NavLink className="nav__a" to="/products">
                  CUENTA{" "}
                </NavLink>
                <NavLink className="nav__a" to="/cart">
                  CARRITO{" "}
                </NavLink>
                <NavLink
                  className="nav__a"
                  to="/"
                  onClick={(e) => logOutfx(e, setlogout)}
                >
                  LOGOUT{" "}
                </NavLink>
                {/* <input value="Cancelar" type="button" className="nav-item" /> */}
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
  )
}
