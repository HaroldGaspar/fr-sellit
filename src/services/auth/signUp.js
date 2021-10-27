import { login, logOutfx, parseJwt, persistEntity, persistEntityNT, sendMailConfirmation } from "services"

/** Create entities user->customer=>cart[] &-> store */
export async function signUp(e, user, history, setloading) {
  e.preventDefault()
  setloading(true)

  //persist user & login
  const userD = await persistEntityNT("users", user)
  user = {
    ...user,
    identifier: user.email
  }
  console.log("usertoRegister: ", user)
  const json = await login(user, null, true)
  console.log(json)
  console.log("jsonWT", parseJwt(json.jwt))

  //persist customer
  const customer = {
    is_seller: Boolean(user.store_name),
    user: userD.id
  }
  const customerD = await persistEntity("customers", customer)
  console.log("customerRegister: ", customerD)

  //persistence cart
  const cart = {
    is_actual: true,
    customer: customerD.id
  }
  const cartD = await persistEntity("carts", cart)
  localStorage.setItem("cart", cartD.id)

  //isSeller ? persist store
  if (user.store_name) {
    const store = {
      name: user.store_name,
      customer: customerD.id
    }
    const storeD = await persistEntity("stores", store)
    localStorage.setItem("store", storeD.id)
  }

  sendMailConfirmation(json.user.email)
  logOutfx()
  setloading(false)
  history.push("/mailconfimation-required")
}


