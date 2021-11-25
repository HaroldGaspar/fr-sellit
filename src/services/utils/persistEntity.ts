import { API_URL } from "../settings"

//persist trought post, but if have an id its doing by put
export async function persistEntity(entitiy: string, object: any, id?: number) {
  const token: string = await localStorage.getItem("token") //PROBLEM WITH TOKEN UNDEFINED REUIN THE STACK OF OP TO SIGNUP
  const resCustomer = await fetch(
    id ? `${API_URL}/${entitiy}/${id}` : `${API_URL}/${entitiy}`,
    {
      method: id ? "put" : "post",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }),
      body: JSON.stringify({ ...object })
    }
  )
  return await resCustomer.json()
}
