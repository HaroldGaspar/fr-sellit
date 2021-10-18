import axios from "axios"
import { API_URL } from "../settings"

export async function uploadImage() {
  const token = localStorage.getItem("token")
  const form: any = document.getElementById("upload-form")
  const formData = new FormData(form) // (imgid.current)
  const resImg: { data: any[] } = await axios.post(
    `${API_URL}/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multippart/form-data",
        Authorization: `Bearer ${token}`
      }
    }
  )
  return resImg.data[0].url
}
