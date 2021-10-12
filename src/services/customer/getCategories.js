import { API_URL } from "../settings"

export async function getCategories(setCategories) {
  const res = await fetch(`${API_URL}/categories`).catch((e) => console.log(e))
  const resD = await res.json()
  setCategories(resD.map((c) => c.name))
  console.log(
    "service",
    resD.map((c) => c.name)
  )
}
