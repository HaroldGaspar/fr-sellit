import React, { useEffect, useState } from "react"
import { OneProduct } from "components"
import { getProductsBySmmt } from "services"
import { useParams } from "react-router"
import styled from "styled-components"

export function ProductsBySmmt({ entity, field }) {
  //recogemos el valor del parametro
  const { id } = useParams()

  //estados
  const [productsBySmmt, setProductsBySmmt] = useState([])
  const [loading, setLoading] = useState()

  //conseguimos la data en el renderizado
  useEffect(() => {
    //////////
    getProductsBySmmt(entity, field, id, setProductsBySmmt, setLoading)
    //////
  }, [id, entity, field])

  return (
    <ProductsList>
      {!loading ? (
        <>
          <h1>
            {field == "store"
              ? "Tienda " + eval(`productsBySmmt[0]?.${field}.name`)
              : "Categoria " + eval(`productsBySmmt[0]?.${field}.name`)}
          </h1>
          <div className="containerls">
            {productsBySmmt.map((oneproduct, i) => (
              <OneProduct key={i} product={oneproduct} />
            ))}
          </div>
        </>
      ) : (
        "loading ...."
      )}
    </ProductsList>
  )
}

const ProductsList = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  .containerls {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .productls__img {
    max-width: 100%;
    height: auto;
  }
`
