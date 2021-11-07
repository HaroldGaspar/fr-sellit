import { API_URL } from "services/settings"
const jwt = localStorage.getItem("token")

//return list
export async function getByField(entity, field, id, setState, setLoading, one) {
  setLoading(true)
  const resApi = await fetch(`${API_URL}/${entity}?${field}=${id}`, {
    headers: new Headers({
      Authorization: `Bearer ${jwt}`
    })
  })
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
