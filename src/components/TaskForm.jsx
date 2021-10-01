import { useEffect } from "react";
import { InputProduct } from ".";
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
            value={props.product.category?.id | 0}
            autoFocus
            ref={props.productInput}
          />
        </div>
        <InputProduct name={"name"} label={"Nombre"} props={props} />
        <InputProduct name={"mark"} label={"Marca"} props={props} />
        <InputProduct
          name={"price"}
          label={"Precio"}
          props={props}
          number={true}
        />
        <InputProduct
          name={"stock"}
          label={"Stock"}
          props={props}
          number={true}
        />

        <div className="form-group">
          <label htmlFor="description">Descripcion</label>
          <textarea
            name="description"
            onChange={(e) => handleIChange(e, props)}
            className="form-control"
            value={props.product.description}
          ></textarea>
        </div>

        {props.showUpdate ? (
          <div className="d-flex">
            <button className="btn btn-outline-info col-6 py-2">
              Actualizar
            </button>
            <input
              value="Cancelar"
              type="button"
              onClick={() => disableEdit(props)}
              className="btn btn-secondary col-6 ml-auto"
            />
          </div>
        ) : (
          <button className="btn btn-outline-success btn-block">Guardar</button>
        )}
      </form>
    </div>
  );
}
