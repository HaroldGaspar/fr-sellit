export function deleteProduct(id, products, setProducts) {
  const tasksF = products.filter((task) => task.id !== id);
  // const tasksF:ITask[] = tasks
  tasksF.splice(id, 1);
  const token = localStorage.getItem("token");

  fetch(`http://localhost:8000/products/${id}`, {
    method: "delete",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  });
  setProducts(tasksF);
}
