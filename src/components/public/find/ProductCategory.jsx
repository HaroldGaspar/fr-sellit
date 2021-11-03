export function ProductCategory({ product }) {
  return (
    <>
      <div className="productcategory__card">
        <div className="productcategory__name">{product.name}</div>
        <img src={"http://hakhi.xyz:8000" + product.photo} />
        <p>precio: {product.price}</p>
        <p>marca: {product.mark}</p>
      </div>
    </>
  )
}
