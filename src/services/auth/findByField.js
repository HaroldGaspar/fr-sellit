import { API_URL } from "../settings"
//return list
export async function findByField(entity, field, id, jwt) {
  const resStore = await fetch(`${API_URL}/${entity}?${field}=${id}`, {
    headers: new Headers({
      Authorization: `Bearer ${jwt}`
    })
  })
  return await resStore.json()
}
