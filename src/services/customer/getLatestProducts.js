export async function getLatestProducts() {
  const latestRes = await fetch(
    "http://hakhi.xyz:8000/products?_sort=created_at:DESC&_limit=5"
  )
  return await latestRes.json()
}
