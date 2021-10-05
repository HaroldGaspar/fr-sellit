export async function getProductsByStore() {
  const store = localStorage.getItem("store")

  const storeRes = await fetch(`http://hakhi.xyz:8000/products?store=${store}`)
  return await storeRes.json()
}
