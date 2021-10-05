export async function getLatestProducts(products, setProducts) {
  const lsres = await fetch(
    "http://hakhi.xyz:8000/products?_sort=created_at:DESC"
  )
  const lsdata = await lsres.json()
  setProducts(lsdata)
  console.log("lsproducts", lsdata)
}
