import React, { useState } from "react"
import { Singin, Singup } from "pages"
import { Spinner } from "components/Spinner"
import Footer from "components/form/Footer"
import "./Auth.css"

export function Auth({ login }) {
  const [loading, setloading] = useState()
  const [user, setUser] = useState({})
  return (
    <>
      <div className="container-home h-100">
        {loading ? (
          <span className="spinner-globainer">
            <Spinner />
            <span className="text-spiner">Cargando tu usuario</span>
          </span>
        ) : (
          <>
            <div className="auth__logo">SELLIT</div>
            {login ? (
              <Singin user={user} setUser={setUser} setloading={setloading} />
            ) : (
              <Singup user={user} setUser={setUser} setloading={setloading} />
            )}
            <Footer />
          </>
        )}
      </div>
    </>
  )
}
