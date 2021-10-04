export const updateProduct = (e, props) => {
  e.preventDefault();
  const newProduct = {
    category: props.product.category.id, //no soportaba un objeto
    name: props.product.name,
    mark: props.product.mark,
    price: props.product.price, //
    description: props.product.description,
    stock: props.product.stock, //
  };

  //persistence
  const token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
    "Content-Type": "application/json",
  };
  fetch(`http://hakhi.xyz:8000/products/${props.product.id}`, {
    method: "put",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(newProduct),
  })
    .then(() => console.log("FETCH updated"))
    .catch((e) => console.log("err ", e));

  //render
  console.log(newProduct);
  const productsEdited = [...props.products];
  const productFiltered = props.products.findIndex(
    (p) => p.id === props.product.id
  );
  productsEdited[productFiltered] = newProduct;
  props.setProducts(productsEdited);

  //form
  console.log("updated index", productFiltered, "=>", productsEdited);
  props.setshowUpdate(false);
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
