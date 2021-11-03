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
      <div>ProductsByCategory</div>
      {!loading
        ? //si ya no esta cargando renderiza
          productsByCategory.map((oneproduct) => (
            <ProductCategory product={oneproduct} />
          ))
        : //si esta cargando=true no renderices -> err no data founded
          "...cargando"}
    </>
  )
}
