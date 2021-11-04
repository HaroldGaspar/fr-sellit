export async function getProductsByCategory(
  id,
  setProductsByCategory,
  setLoading
) {
  setLoading(true)
  const productByCategory = await fetch(
    "http://hakhi.xyz:8000/products?category=" + id
  )
  const data = await productByCategory.json()
  setProductsByCategory(data)
  setLoading(false)
}
