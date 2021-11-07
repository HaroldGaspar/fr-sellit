import React, { useEffect, useState } from "react"

export function UserDetail() {
  const [user, setUser] = useState("")
  useEffect(() => {
    setUser(localStorage.getItem("user"))
    console.log("userDetailcmp", user)
  }, [user])
  return (
    <div>
      <h2>Hola {user ? user.split('"')[5] : ""}</h2>
      <div>
        En esta seccion puede ver tus compras realizadas.
        {localStorage.getItem("store")
          ? "\nTambien puedes editar la informacion de tu tienda"
          : ""}
      </div>
    </div>
  )
}
