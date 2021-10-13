import { login, persistEntity } from "services"

export async function signUp(e, user, history, setloading) {
  e.preventDefault()
  setloading(true)

  const userD = await persistEntity("users", "", user)
  console.log("create user ", userD)

  //login
  const json = await login(user)
  console.log("jwt", json.jwt)

  //persist customer
  const customer = {
    is_seller: Boolean(user.store_name),
    user: userD.id
  }
  const customerD = await persistEntity("customers", json.jwt, customer)
  console.log(
    `create ${Boolean(user.store_name) ? "seller" : "customer"}: `,
    customerD //.id
  )

  //persistence cart
  const cart = {
    is_actual: true,
    customer: customerD.id
  }
  const cartD = await persistEntity("carts", json.jwt, cart)
  console.log("create cart", cartD) //.id)
  localStorage.setItem("cart", cartD.id)

  //isSeller ? persist store
  if (user.store_name) {
    const store = {
      name: user.store_name,
      customer: customerD.id
    }

    const storeD = await persistEntity("stores", json.jwt, store)
    console.log("create store ", storeD) //.id)
    localStorage.setItem("store", storeD.id) //filtrar los productos por tienda para la vista del seller
  }
  setloading(false)
  history.push("/")
}
