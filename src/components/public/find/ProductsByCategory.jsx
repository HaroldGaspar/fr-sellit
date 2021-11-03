import React, { useEffect, useState } from "react"
import { ProductCategory } from "components"
import { getProductsByCategory } from "services"
import { useParams } from "react-router"

export function ProductsByCategory() {
  //recogemos el valor del parametro
  const { id } = useParams()

  //estados
  const [productsByCategory, setProductsByCategory] = useState([])
  const [loading, setLoading] = useState()

  //conseguimos la data en el renderizado
  useEffect(() => {
    //////////
    getProductsByCategory(id, setProductsByCategory, setLoading)
    //////
  }, [])

  return (
    <>
      <h1>ProductsByCategory</h1>
      <div className="container d-flex">
        {!loading
          ? //si ya no esta cargando renderiza
            productsByCategory.map((oneproduct, i) => (
              <ProductCategory key={i} product={oneproduct} />
            ))
          : //si esta cargando=true no renderices -> err no data founded
            "...cargando"}
      </div>
    </>
  )
}
