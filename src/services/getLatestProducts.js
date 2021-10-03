export async function getLatestProducts(products, setProducts) {
  const lsres = await fetch(
    "http://localhost:8000/products?_sort=created_at:DESC"
  );
  const lsdata = await lsres.json();
  setProducts(lsdata);
  console.log("lsproducts", lsdata);
}
