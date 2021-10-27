import { login } from "services"
import { API_URL } from "../settings"

//persist trought post, but if have an id its doing by put
export async function persistEntityNT(entitiy: string, object: any) {
  //if send a authorization empty, the api return an unauthorization
  const resCustomer = await fetch(`${API_URL}/${entitiy}`, {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({ ...object })
  })
  return await resCustomer.json()
}

export async function updateUser(id:string, history?:any) {
  const resCustomer = await fetch(`${API_URL}/users/${id}`, {
    method: "put",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({confirmed: true})
  })
  return await resCustomer.json()
}