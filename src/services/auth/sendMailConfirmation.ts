import { API_URL } from "../settings"
export async function sendMailConfirmation(email: string) {
  const token = localStorage.getItem("token")
  console.log("sending mail", token)
  await fetch(`${API_URL}/mm`, {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }),
    body: JSON.stringify({
      token,
      email
    })
  })
}
