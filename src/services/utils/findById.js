import { API_URL } from "../settings"
const token = localStorage.getItem("token")

export async function findById(entity, id) {
  const resStore = await fetch(`${API_URL}/${entity}/${id}`, {
    headers: new Headers({
      Authorization: `Bearer ${token}`
    })
  })
  return await resStore.json()
}
