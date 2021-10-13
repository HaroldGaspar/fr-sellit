import { API_URL } from "../settings"

export async function persistEntity(entitiy, jwt, object) {
  const resCustomer = await fetch(`${API_URL}/${entitiy}`, {
    method: "post",
    headers: new Headers(
      jwt
        ? {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json"
          }
        : {
            "Content-Type": "application/json"
          }
    ),
    body: JSON.stringify({ ...object })
  })
  return await resCustomer.json()
}
