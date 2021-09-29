export function deleteProduct(id, products, setProducts) {
  const tasksF = products.filter((task) => task.id !== id);
  // const tasksF:ITask[] = tasks
  // tasksF.splice(id,1)
  setProducts(tasksF);
}
