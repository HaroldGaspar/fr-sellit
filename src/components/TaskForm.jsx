import { useEffect } from "react";
import { disableEdit, handleIChange } from "../utils";
import { addProduct, updateProduct } from "./../services";

export function TaskForm(props) {
  useEffect(() => {
    //refresca el componente por cada cambio de estado
    //si hay un id = se esta actualizando
    //si hay algo en los inputs = se esta creando
    //y si no hay nada = sin interacciones
    document.title = props.product.id
      ? `updating ${props.product.id}`
      : props.product.name.length | props.product.description.length
      ? "creating..."
      : "productos";
  });

  return (
    <div
      className={
        props.showUpdate
          ? "card card-body bg-light mt-2"
          : "card card-body bg-muted mt-2"
      }
    >
      <form
        onSubmit={
          props.showUpdate
            ? (e) => updateProduct(e, props)
            : (e) => addProduct(e, props)
        }
      >
        <h2 className="text-center">
          {props.showUpdate ? "Modificar Producto" : "Agregar Producto"}
        </h2>

        <div className="form-group">
          <label htmlFor="category">Categoria</label>
          <input
            type="text"
            name="category"
            onChange={(e) => handleIChange(e, props)}
            className="form-control"
            value={props.product.category}
            autoFocus
            ref={props.productInput}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            onChange={(e) => handleIChange(e, props)}
            className="form-control"
            value={props.product.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mark">Marca</label>
          <input
            type="text"
            name="mark"
            onChange={(e) => handleIChange(e, props)}
            className="form-control"
            value={props.product.mark}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Precio</label>
          <input
            type="text"
            name="price"
            onChange={(e) => handleIChange(e, props)}
            className="form-control"
            value={props.product.price}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Descripcion</label>
          <textarea
            name="description"
            onChange={(e) => handleIChange(e, props)}
            className="form-control"
            value={props.product.description}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            type="text"
            name="stock"
            onChange={(e) => handleIChange(e, props)}
            className="form-control"
            value={props.product.stock}
          />
        </div>

        {props.showUpdate ? (
          <>
            <button className="btn btn-outline-info col-6 color-black">
              Actualizar
            </button>
            <input
              value="cancelar"
              type="button"
              onClick={() => disableEdit(props)}
              className="btn btn-secondary col-6"
            />
          </>
        ) : (
          <button className="btn btn-outline-success btn-block">Guardar</button>
        )}
      </form>
    </div>
  );
}
