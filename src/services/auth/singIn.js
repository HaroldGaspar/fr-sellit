export const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]))
  } catch (e) {
    return null
  }
}

export async function singIn(e, history, user) {
  e.preventDefault()

  console.log("data ", JSON.stringify(user))

  //login
  const json = await login(user, history)
  console.log("jwt", json)
  const userId = parseJwt(json.jwt).id

  //fetch findCustomerByUserId
  const resCustomer = await fetch(
    `http://hakhi.xyz:8000/customers?user=${userId}`,
    {
      headers: new Headers({
        Authorization: `Bearer ${json.jwt}`
      })
    }
  )
  const customerD = await resCustomer.json()
  console.log("customer: ", customerD)

  //find its cart
  const resCart = await fetch(
    `http://hakhi.xyz:8000/carts?customer=${customerD[0].id}`,
    {
      headers: new Headers({
        Authorization: `Bearer ${json.jwt}`
      })
    }
  )
  const cartD = await resCart.json()
  console.log("cart ", cartD[0].id)
  localStorage.setItem("cart", cartD[0].id)

  //isSeller
  if (customerD[0].is_seller) {
    //find store store
    const resStore = await fetch(
      `http://hakhi.xyz:8000/stores?customer=${customerD[0].id}`,
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
  console.log("login succesfully")
}

export async function login(user, history) {
  //login
  const res = await fetch("http://hakhi.xyz:8000/auth/local", {
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
