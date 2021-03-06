import { Spinner } from "components"
import { Iproduct } from "models/Product"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getProduct } from "services"

export function Detail() {
  const { id } = useParams<{ id?: string }>()
  const [actualProduct, setActualProduct] = useState<Iproduct>()
  const [loading, setLoading] = useState()

  useEffect(() => {
    console.log("id", id)
    getProduct(id, setActualProduct, setLoading)
  }, [])

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h2>{actualProduct.name}</h2>
          <p>{actualProduct.price}</p>
        </>
      )}
    </div>
  )
}
