export const updateProduct = (e, props) => {
  e.preventDefault();
  const newProduct = {
    category: props.product.category,
    name: props.product.name,
    mark: props.product.mark,
    price: props.product.price,
    description: props.product.description,
    stock: props.product.stock,
    completed: true,
  };

  console.log(newProduct);
  const productsEdited = [...props.products];
  const productFiltered = props.products.findIndex(
    (p) => p.id === props.product.id
  );
  productsEdited[productFiltered] = newProduct;
  props.setProducts(productsEdited);

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
