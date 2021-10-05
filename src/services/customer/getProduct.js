export async function getProduct(id, setactualProduct) {
  const resProduct = await fetch(`http://hakhi.xyz:8000/products/${id}`);

  const resD = await resProduct.json();
  console.log("detail", resD);

  setactualProduct(resD);
}
