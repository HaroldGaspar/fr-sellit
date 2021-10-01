export const addProduct = (e, props) => {
  e.preventDefault();
  console.log("saving ", props.product);

  const newProduct = {
    // id: getCurrentTimeStamp(),
    category: props.product.category,
    name: props.product.name,
    mark: props.product.mark,
    price: props.product.price,
    stock: props.product.stock,
    description: props.product.description,
    store: localStorage.getItem("store"),
  };

  //persisten
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  fetch("http://localhost:8000/products", {
    method: "post",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(newProduct),
  });
  props.setProducts([...props.products, newProduct]);
  //format
  props.setProduct({
    category: "",
    name: "",
    mark: "",
    price: "",
    description: "",
    stock: "",
  });
  //ref
  props.productInput?.current?.focus();
};
