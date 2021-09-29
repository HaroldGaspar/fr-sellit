export const addProduct = (e, props) => {
  e.preventDefault();
  const newProduct = {
    id: getCurrentTimeStamp(),
    category: props.product.category,
    name: props.product.name,
    mark: props.product.mark,
    price: props.product.price,
    description: props.product.description,
    stock: props.product.stock,
    completed: true,
  };
  console.log("saving ", props.product);
  //persisten
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

function getCurrentTimeStamp() {
  return new Date().getTime();
}
