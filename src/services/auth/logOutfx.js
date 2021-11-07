export function logOutfx(e, setlogout) {
  localStorage.removeItem("token")
  localStorage.removeItem("store")
  localStorage.removeItem("cart")
  localStorage.removeItem("customer")
  localStorage.removeItem("user")
  console.log("logout")
  if (setlogout) setlogout(false)
}
