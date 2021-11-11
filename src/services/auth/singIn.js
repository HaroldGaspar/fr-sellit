import { findByField, login, parseJwt } from "services"

/** login & set cartId,storeId in localstorage */
export async function singIn(e, history, user, setloading) {
  e.preventDefault()
  setloading(true)

  //login
  const json = await login(user, history)
  if (json.statusCode === 400) {
    //due to incorrect password, must be first
    setloading(false)
    alert(json.message[0].messages[0].message)
    return json
  }
  if (json.user.confirmed === null) {
    console.log("no confimed, no login", json)
    return json
  }
  if (json.statusCode === 400) {
    //due to incorrect password, must be first
    setloading(false)
    alert(json.message[0].messages[0].message)
    return json
  }
  if (json.statusCode === 400) {
    //due to incorrect password, must be first
    setloading(false)
    alert(json.message[0].messages[0].message)
    return json
  }
  if (json.statusCode === 400) {
    //due to incorrect password, must be first
    setloading(false)
    alert(json.message[0].messages[0].message)
    return json
  }
  if (json.statusCode === 400) {
    //due to incorrect password, must be first
    setloading(false)
    alert(json.message[0].messages[0].message)
    return json
  }
  if (json.statusCode === 400) {
    //due to incorrect password, must be first
    setloading(false)
    alert(json.message[0].messages[0].message)
    return json
  }
  console.log("json", json)
  const userId = parseJwt(json.jwt).id

  //findCustomer ByUserId
  const customerD = await findByField("customers", "user", userId, json.jwt)
  localStorage.setItem("customer", customerD[0].id)
  console.log("cus", customerD[0])
  //findActualCart & set in LocalStorage
  // const cartD = await findByField("carts","customer",customerD.id, json.jwt)
  const cartsF = customerD[0].carts.filter((c) => c.is_actual === true)
  // console.log("carts", cartD)
  localStorage.setItem("cart", cartsF[0].id)
  localStorage.setItem("user", JSON.stringify(json.user))
  //setStoreId in LocalStorage
  if (customerD[0].store?.id) {
    localStorage.setItem("store", customerD[0].store.id)
  }

  //refirect to home
  history.push("/")
  setloading(false)
  console.log("login succesfully")
}
