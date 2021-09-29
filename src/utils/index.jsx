//state

export const handleIChange = (e, props) => {
  const { name, value } = e.target;
  props.setProduct({ ...props.product, [name]: value });
  // if (!props.task.id)
  //     document.title= 'creating task'
};

export function handleEdit(id, props) {
  const productFiltered = props.products.filter(
    (product) => product.id === id
  )[0];
  props.setProduct(productFiltered);
  props.setshowUpdate(true);
  //ref
  props.productInput?.current?.focus(); //?????????????????
}

export function disableEdit(props) {
  props.setProduct({
    id: 0,
    category: "",
    name: "",
    mark: "",
    price: "",
    description: "",
    stock: "",
    completed: false,
  });
  props.setshowUpdate(false);
}
