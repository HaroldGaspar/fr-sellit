import { useEffect } from "react"
import { Buttons, InputProduct } from "components"
import { handleIChange } from "utils"
import { addProduct, updateProduct } from "services"
import InputImage from "components/form/InputImage"
import "components/form/Form.css"

export function ProductForm(props) {
  useEffect(() => {
    //si hay un id = se esta actualizando
    //si hay algo en los inputs = se esta creando
    //y si no hay nada = sin interacciones
    document.title = props.product.id
      ? `updating ${props.product.id}`
      : props.product.name.length | props.product.description.length
      ? "creating..."
      : "productos"
  })

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
        <h2 className="form__title">
          {props.showUpdate ? "Modificar Producto" : "Agregar Producto"}
        </h2>

        <div className="form__group">
          <label htmlFor="category">Categoria</label>
          <input
            type="text"
            name="category"
            onChange={(e) => handleIChange(e, props)}
            className="form__control"
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

        <div className="form__group">
          <label htmlFor="description">Descripcion</label>
          <textarea
            name="description"
            onChange={(e) => handleIChange(e, props)}
            className="form__control"
            value={props.product.description}
          ></textarea>
        </div>

        {/* <InputImage props={props} /> */}

        <Buttons props={props} />
      </form>
    </div>
  )
}
