import React, { useEffect, useState } from "react"

//nav
import { NavLink } from "react-router-dom"
import { SearchBar } from "components"
import { logOutfx } from "services"
// import "./Nav.css"
import styled from "styled-components"
let user
export function Nav(props) {
  const [logout, setlogout] = useState()
  const [store, setstore] = useState(false)

  useEffect(() => {
    setlogout(localStorage.getItem("token"))
    setstore(localStorage.getItem("store"))
    user = localStorage.getItem("user")
    // console.log("logout", logout)
  }, [logout, store])
  return (
    <NavStyle>
      <nav className="nav navbar-expand-lg navbar-light">
        <NavLink className="nav__brand " to="/">
          SELLIT
        </NavLink>
        <SearchBar />
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
                  <NavLink className="nav__a" to="/user">
                    <img
                      src={process.env.PUBLIC_URL + "/img/user.png"}
                      alt="cart"
                      className="logo"
                    />
                    {user.split('"')[5].toUpperCase()}
                  </NavLink>
                  <NavLink className="nav__a" to="/cart">
                    <img
                      src={process.env.PUBLIC_URL + "/img/cart.svg"}
                      alt="cart"
                      className="logo"
                    />
                    CARRITO{" "}
                  </NavLink>
                  <NavLink
                    className="nav__a"
                    to="/"
                    onClick={(e) => logOutfx(e, setlogout)}
                  >
                    <img src="" alt="" className="logo" />
                    LOGOUT{" "}
                  </NavLink>
                  {/* <input value="Cancelar" type="button" className="nav-item" /> */}
                </div>
              ) : (
                <>
                  <NavLink className="nav__a" to="/login">
                    INGRESAR{" "}
                  </NavLink>
                </>
              )}
            </span>
          </ul>
        </div>
      </nav>
    </NavStyle>
  )
}

const NavStyle = styled.div`
  .nav {
    background: #8b6f97;
    color: aliceblue;
    /* display: block; */
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
  }
  .logo {
    height: 40px;
  }

  .nav__sub {
    color: aliceblue;
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
  }

  .nav__a {
    color: #ddd;
    font-weight: 700;
    padding-left: 9px;
    padding-right: 9px;
    transition: ease 0.4s;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nav__a:hover {
    color: #444;
    text-decoration: none;
  }

  .nav__brand {
    padding: 0.3125rem 0.5em;
    font-size: 2em;
    color: aliceblue;
    font-weight: 700;
    transition: ease 0.5s;
  }
  .nav__brand:hover {
    color: #444;
    text-decoration: none;
  }

  .navbar-toggler {
    color: rgba(0, 0, 0, 0.5);
    border-color: rgba(235, 77, 77, 0.1);

    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    margin: 0.4em 0.4em 0.4em auto;
  }

  .navbar-toggler-icon {
    color: rgba(0, 0, 0, 0.5);
  }

  .mlefu-auto {
    margin-left: auto;
  }
  @media (max-width: 1000px) {
    .nav__sub {
      flex-direction: column;
    }
    .mlefu-auto {
      margin-left: 0;
    }
    .nav__a {
      margin: 15px 0;
    }
  }
`
