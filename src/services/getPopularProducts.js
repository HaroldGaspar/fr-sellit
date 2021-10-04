export async function getPopularProducts(products, setProducts) {
  const res = await fetch(
    "http://hakhi.xyz:8000/products?_sort=rating:DESC&_limit=3"
  );
  const data = await res.json();
  setProducts(data);
  console.log("popular products", data);
}
