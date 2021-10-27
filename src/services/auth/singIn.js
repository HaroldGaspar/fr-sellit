import { findByField, login, parseJwt } from "services"

/** login & set cartId,storeId in localstorage */
export async function singIn(e, history, user, setloading) {
  e.preventDefault()
  setloading(true)

  //login
  const  json = await login(user,history)
  if(json===undefined | Error){
    // console.log('no confimed, no login', json)
    return
  }    
  console.log('json',json)
  const userId = parseJwt(json.jwt).id

  //findCustomer ByUserId
  const customerD = await findByField("customers", "user", userId, json.jwt)
  console.log("cus", customerD)
  //findActualCart & set in LocalStorage
  // const cartD = await findByField("carts","customer",customerD.id, json.jwt)
  const cartsF = customerD[0].carts.filter((c) => c.is_actual === true)
  // console.log("carts", cartD)
  localStorage.setItem("cart", cartsF[0].id)

  //setStoreId in LocalStorage
  if (customerD[0].store?.id) {
    localStorage.setItem("store", customerD[0].store.id)
  }

  //refirect to home
  history.push("/")
  setloading(false)
  console.log("login succesfully")
}
