import { login, parseJwt } from ".";

export async function signUp(e, user, history) {
  e.preventDefault();
  console.log("registrado");
  console.log(user);

  //password confirm in the backend
  //persist user
  const resUser = await fetch("http://localhost:8000/users", {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({ ...user, is_seller: Boolean(user.store_name) }),
  });
  const userD = await resUser.json();
  console.log("user ", userD);

  //login
  const json = await login(user, history);
  console.log(parseJwt(json.jwt));

  //persist customer
  const resCustomer = await fetch("http://localhost:8000/customers", {
    method: "post",
    headers: new Headers({
      Authorization: `Bearer ${json.jwt}`,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      is_seller: Boolean(user.store_name),
      user: userD.id,
    }),
  });
  const customerD = await resCustomer.json();
  console.log("customer: ", customerD.id);

  //persistence cart
  const resCart = await fetch("http://localhost:8000/carts", {
    method: "post",
    headers: new Headers({
      Authorization: `Bearer ${json.jwt}`,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      is_actual: true,
      customer: customerD.id,
    }),
  });

  const cartD = await resCart.json();
  // console.log("cart", cartD.id)
  localStorage.setItem("cart", cartD.id);

  //isSeller
  if (user.store_name) {
    //persiste store
    const resStore = await fetch("http://localhost:8000/stores", {
      method: "post",
      headers: new Headers({
        Authorization: `Bearer ${json.jwt}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        name: user.store_name,
        customer: customerD.id,
      }),
    });
    const storeD = await resStore.json();
    console.log("store ", storeD.id);
    localStorage.setItem("store", storeD.id); //filtrar los productos por tienda para la vista del seller
  }
  history.push("/");
}
