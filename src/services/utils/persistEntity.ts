import { API_URL } from "../settings"
const token = localStorage.getItem("token")

//persist trought post, but if have an id its doing by put
export async function persistEntity(entitiy: string, object: {}, id?: number) {
  const resCustomer = await fetch(
    id ? `${API_URL}/${entitiy}/${id}` : `${API_URL}/${entitiy}`,
    {
      method: id ? "put" : "post",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ ...object })
    }
  )
  return await resCustomer.json()
}
