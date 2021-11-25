import { findByField, login, parseJwt } from "services"

/** login & set cartId,storeId in localstorage */
export async function singIn(e, history, user, setloading) {
  e.preventDefault()
  setloading(true)

  //login
  const loginResponse = await login(user, history)
  if (loginResponse.statusCode === 400) {
    //due to incorrect password, must be first
    setloading(false)
    alert(loginResponse.message[0].messages[0].message)
    return loginResponse
  }
  // console.log("loginResponse ", loginResponse)
  const userId = parseJwt(loginResponse.jwt).id

  //findCustomer ByUserId
  const customerD = await findByField("customers", "user", userId, true, true)
  localStorage.setItem("customer", customerD.id)
  // console.log("cus", customerD[0])
  localStorage.setItem("user", JSON.stringify(loginResponse.user))

  //findActualCart | isnt necesary make a request, the carts are in customer
  // const cartD = await findByField("carts","customer",customerD.id, json.jwt)
  const cartsF = customerD.carts.filter((c) => c.is_actual === true)
  localStorage.setItem("cart", cartsF[0].id)

  //setStoreId in LocalStorage
  if (customerD.store?.id) {
    localStorage.setItem("store", customerD.store.id)
  }

  //refirect to home
  setloading(false)
  console.log("login succesfully")
  history.push("/") //push should be at the end 'cs throw performance leak alert
}
