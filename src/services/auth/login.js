import { API_URL } from "../settings"
export async function login(user, history, register) {
  //login
  const res = await fetch(`${API_URL}/auth/local`, {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      identifier: user.email,
      password: user.password
    })
  })

  //set token in LocalStorage
  const json = await res.json()
  //si esta registrando, permitir la obtecion del token
  if (!register) {
    //si no esta confirmada
    if (json.user.confirmed !== true) {
      console.log(json)
      history.push("/mailconfimation-required")
      // const error=Error("Mail confirmation required")
      return
    }
  }
  localStorage.setItem("token", json.jwt)
  return json
}

export const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]))
  } catch (e) {
    return null
  }
}
