export async function getProduct(id, setactualProduct, setloading) {
  if (id === null) return
  setloading(true)
  const resProduct = await fetch(`http://hakhi.xyz:8000/products/${id}`)

  const resD = await resProduct.json()
  console.log("detail", resD)
  setloading(false)
  setactualProduct(resD)
}
