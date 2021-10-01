export function deleteProduct(id, products, setProducts) {
  const tasksF = products.filter((task) => task.id !== id);
  // const tasksF:ITask[] = tasks
  tasksF.splice(id, 1);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMzMDEyNjMyLCJleHAiOjE2MzU2MDQ2MzJ9.bKikEe0JDW0xYuCP65Fag863ORgA4-NUZZRfsnj8rKY";
  fetch(`http://localhost:8000/products/${id}`, {
    method: "delete",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  });
  setProducts(tasksF);
}
