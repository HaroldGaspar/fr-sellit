import React, { useState } from "react"
import { Singin, Singup } from "pages"
import { Spinner } from "components"
import Footer from "components/extras/auth-form/AuthFooter"
import { Iuser } from "models/Product"
import { AuthLogo, SpinnerGlobainer, TextSpiner } from "./styles"

export function Auth({ login }: { login: boolean }) {
  const [loading, setloading] = useState<boolean>()
  const [user, setUser] = useState<Iuser>({ email: "", password: "" })
  return (
    <>
      {loading ? (
        <SpinnerGlobainer>
          <Spinner />
          <TextSpiner>Cargando tu usuario</TextSpiner>
        </SpinnerGlobainer>
      ) : (
        <>
          <AuthLogo>SELLIT</AuthLogo>
          {login ? (
            <Singin user={user} setUser={setUser} setloading={setloading} />
          ) : (
            <Singup user={user} setUser={setUser} setloading={setloading} />
          )}
          <Footer />
        </>
      )}
    </>
  )
}
