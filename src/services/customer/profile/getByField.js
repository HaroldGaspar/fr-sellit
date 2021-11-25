import { API_URL } from "services/settings"

//return list
export async function getByField(
  entity,
  field,
  id,
  setState,
  setLoading,
  one,
  tk = true
) {
  const jwt = localStorage.getItem("token")
  setLoading(true)
  let header
  if (tk) {
    header = {
      headers: new Headers({
        Authorization: `Bearer ${jwt}`
      })
    }
  }

  const resApi = await fetch(`${API_URL}/${entity}?${field}=${id}`, header)
  const resData = await resApi.json()
  if (one === true) {
    setState(resData[0])
    console.log(entity, resData[0])
  } else {
    setState(resData)
    console.log(entity, resData)
  }
  setLoading(false)
}
