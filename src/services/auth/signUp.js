import { login, persistEntity } from "services"

/** Create entities user->customer=>cart[] &-> store */
export async function signUp(e, user, history, setloading) {
  e.preventDefault()
  setloading(true)

  //persist user & login
  const userD = await persistEntity("users", user)
  await login(user)

  //persist customer
  const customer = {
    is_seller: Boolean(user.store_name),
    user: userD.id
  }
  const customerD = await persistEntity("customers", customer)

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

  setloading(false)
  history.push("/")
}
