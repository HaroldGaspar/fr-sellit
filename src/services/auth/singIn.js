import { API_URL } from "../settings"
export const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]))
  } catch (e) {
    return null
  }
}

export async function singIn(e, history, user, setloading) {
  e.preventDefault()
  setloading(true)
  console.log("data ", JSON.stringify(user))

  //login
  const json = await login(user)
  console.log("jwt", json)
  const userId = parseJwt(json.jwt).id

  //fetch findCustomerByUserId
  const resCustomer = await fetch(`${API_URL}/customers?user=${userId}`, {
    headers: new Headers({
      Authorization: `Bearer ${json.jwt}`
    })
  })
  const customerD = await resCustomer.json()
  console.log("customer: ", customerD)

  //find its cart
  const resCart = await fetch(`${API_URL}/carts?customer=${customerD[0].id}`, {
    headers: new Headers({
      Authorization: `Bearer ${json.jwt}`
    })
  })
  const cartD = await resCart.json()
  console.log("cart ", cartD[0].id)
  localStorage.setItem("cart", cartD[0].id)

  //isSeller
  if (customerD[0].is_seller) {
    //find store store
    const resStore = await fetch(
      `${API_URL}/stores?customer=${customerD[0].id}`,
      {
        headers: new Headers({
          Authorization: `Bearer ${json.jwt}`
        })
      }
    )
    const storeD = await resStore.json()
    console.log("store ", storeD.id)
    localStorage.setItem("store", storeD[0].id)
  }
  history.push("/")
  setloading(false)
  console.log("login succesfully")
}

export async function login(user) {
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
  //set token
  const json = await res.json()
  console.log("res", res)
  localStorage.setItem("token", json.jwt)

  return json
}
