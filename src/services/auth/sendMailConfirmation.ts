const API_URL = "http://localhost:8000"
export async function sendMailConfirmation(email:string) {
  const token = localStorage.getItem("token")
  await fetch(`${API_URL}/mm`,
    {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }),
      body: JSON.stringify({ 
          token,
          email
       })
    }
  )

}
