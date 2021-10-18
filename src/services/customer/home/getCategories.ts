import { Icategory } from "models/Product"
import { Dispatch, SetStateAction } from "react"
import { API_URL } from "services/settings"

/**
 * persist trough post and set the response in the state
 * @param setCategories Dispatch<SetStateAction<Icategory[]>>
 */
export async function getCategories(
  setCategories: Dispatch<SetStateAction<string[]>>
) {
  const res: Response = await fetch(`${API_URL}/categories`)
  const resD: Icategory[] = await res.json()
  const categoriesNames: string[] = resD.map((c: Icategory) => c.name)
  setCategories(categoriesNames)
  console.log("categoriesNames", categoriesNames)
}
