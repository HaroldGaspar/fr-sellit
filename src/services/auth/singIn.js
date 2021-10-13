import { findByField, login, parseJwt } from "services"

export async function singIn(e, history, user, setloading) {
  e.preventDefault()
  setloading(true)

  //login
  const json = await login(user)
  console.log("jwt", json)
  const userId = parseJwt(json.jwt).id

  //fetch findCustomerByUserId
  const customerD = await findByField("customers", "user", userId, json.jwt)
  console.log("customer finded: ", customerD[0])

  //find its in customer the cart which isActul=true & set in LocalStorage
  const cartsF = customerD[0].carts.filter((c) => c.is_actual === true)
  console.log("cartID: ", cartsF)
  localStorage.setItem("cart", cartsF[0].id)

  if (customerD[0].store.id) {
    console.log("storeID: ", customerD[0].store.id)
    localStorage.setItem("store", customerD[0].store.id)
  }

  //refirect to home
  history.push("/")
  setloading(false)
  console.log("login succesfully")
}
