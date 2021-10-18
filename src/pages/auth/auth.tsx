import React, { useState } from "react"
import { Singin, Singup } from "pages"
import { Spinner } from "components"
import Footer from "components/extras/auth-form/AuthFooter"
import "./Auth.css"
import { Iuser } from "models/Product"

export function Auth({ login }: { login: boolean }) {
  const [loading, setloading] = useState<boolean>()
  const [user, setUser] = useState<Iuser>({ email: "", password: "" })
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
