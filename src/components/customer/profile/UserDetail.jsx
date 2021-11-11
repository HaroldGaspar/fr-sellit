import React, { useEffect, useState } from "react"

export function UserDetail() {
  const [user, setUser] = useState("")
  useEffect(() => {
    setUser(localStorage.getItem("user"))
    console.log("userDetailcmp", user)
  }, [user])
  return (
    <>
      <h2>
        Hola <b> {user ? user.split('"')[5] : ""}</b>
      </h2>
      <div className="mssg">
        En esta seccion puede ver tus compras realizadas.
        {localStorage.getItem("store")
          ? "\nTambien puedes editar la informacion de tu tienda"
          : ""}
      </div>
    </>
  )
}
