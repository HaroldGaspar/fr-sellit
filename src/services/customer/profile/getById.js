import { API_URL } from "services/settings"
const jwt = localStorage.getItem("token")

//return list
export async function getById(entity, id, setState, setLoading) {
  setLoading(true)
  const resApi = await fetch(`${API_URL}/${entity}/${id}`, {
    headers: new Headers({
      Authorization: `Bearer ${jwt}`
    })
  })
  const resData = await resApi.json()
  setState(resData)
  console.log(entity, resData)
  setLoading(false)
}
