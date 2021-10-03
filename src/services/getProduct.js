export async function getProduct(id, setactualProduct) {
  const resProduct = await fetch(`http://localhost:8000/products/${id}`);

  const resD = await resProduct.json();
  console.log("detail", resD);

  setactualProduct(resD);
}
