export function ProductCategory({ product }) {
  return (
    <>
      <div className="card m-2 p-2">
        <div className="productcategory__card">
          <div className="productcategory__name">{product.name}</div>
          <img src={"http://hakhi.xyz:8000" + product.photo} />
          <p>precio: {product.price}</p>
          <p>marca: {product.mark}</p>
          <p>tienda: {product.store.name}</p>
        </div>
      </div>
    </>
  )
}
