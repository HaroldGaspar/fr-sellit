import { API_URL } from "../settings"

//return response
export async function findByField(entity, field, id, tk, one) {
  //token?
  let header
  if (tk) {
    const jwt = localStorage.getItem("token")
    header = {
      headers: new Headers({
        Authorization: `Bearer ${jwt}`
      })
    }
  }

  const resData = await fetch(`${API_URL}/${entity}?${field}=${id}`, header)
  const json = await resData.json()
  // console.log("findByField: " + JSON.stringify(json))
  if (one === true) {
    return json[0]
  } else {
    return json
  }
}
