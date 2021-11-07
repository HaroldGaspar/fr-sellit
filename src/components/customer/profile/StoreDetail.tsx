import { BtnDetail } from "components"
import { Store } from "pages"
import React, { useEffect, useState } from "react"
import { getByField, getById, persistEntity } from "services"
import styled from "styled-components"

export function StoreDetail() {
  const [store, setStore] = useState<any>()
  const [editando, setEditando] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const idStore = localStorage.getItem("store")

  useEffect(() => {
    // getByField("stores", "customer", idStore, setStore, setLoading, true)
    getById("stores", idStore, setStore, setLoading)
  }, [idStore])

  const handleEdit = () => {
    setEditando((pp) => !pp)
    console.log("show form")
  }

  const hdlChng = (e: any) => {
    const { name, value } = e.target
    setStore({ ...store, [name]: value })
  }

  const updateStore = (e: any) => {
    e.preventDefault()
    console.log("submiting")
    let adp = {
      name: store.name,
      description: store.description,
      phone_number: store.phone_number,
      address: store.address
    }
    persistEntity("stores", adp, store.id)
    setEditando((pp) => !pp)
  }
  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <>
          <hr />
          <h4>Informacion de tu tienda</h4>
          <div> Tienda: {store?.name.toUpperCase()}</div>
          <div> Direccion: {store?.address}</div>
          <div> Telefono: {store?.phone_number}</div>
          <div> Acerca de la tienda: {store?.description}</div>
          {editando ? (
            <form className="formstore" onSubmit={(e) => updateStore(e)}>
              <h5>Editar informacion</h5>
              <LabelForm
                hdlChng={hdlChng}
                label={"Nombre"}
                name={"name"}
                store={store}
              />
              <LabelForm
                hdlChng={hdlChng}
                label={"Direccion"}
                name={"address"}
                store={store}
              />
              <LabelForm
                hdlChng={hdlChng}
                label={"Telefono"}
                name={"phone_number"}
                store={store}
              />
              <LabelForm
                hdlChng={hdlChng}
                label={"Acerca de la tienda"}
                name={"description"}
                store={store}
              />
              <BtnDetail>Guardar</BtnDetail>
            </form>
          ) : (
            ""
          )}
          <BtnDetail
            onClick={() => handleEdit()}
            style={{ width: "100px", float: "right" }}
          >
            {editando ? "Cancelar" : "Editar"}
          </BtnDetail>
        </>
      )}
    </>
  )
}

function LabelForm({ hdlChng, label, name, store }: props) {
  return (
    <label className="form__label">
      {label}:
      <input
        className="form__control"
        name={name}
        onChange={(e) => hdlChng(e)}
        value={eval(`store.${name}`)}
      />
    </label>
  )
}

interface props {
  hdlChng: any
  label: string
  name: string
  store: any
}
