export function logOutfx(e, setlogout) {
  localStorage.removeItem("token")
  localStorage.removeItem("store")
  localStorage.removeItem("cart")
  console.log("logout")
  if(setlogout)
    setlogout(false)
}
