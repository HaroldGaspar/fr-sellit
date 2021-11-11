import { Invoicecard, Price } from "components"
import React, { useEffect, useState } from "react"
import { findById } from "services"

export function ProductDetailModal({ productDetail }: any) {
  const [loading, setLoading] = useState<boolean>()
  const [productsDT, setProductsDT] = useState<productRaw>()

  const init = async () => {
    setLoading(true)
    const product = await findById("products", productDetail.product)
    setProductsDT(product)
    console.log("products", productsDT)
    setLoading(false)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <Invoicecard>
      {loading ? (
        ""
      ) : (
        <>
          <div className="cardt__name">
            {productsDT?.name || "noreceive name"}{" "}
            <small>
              <b>{productsDT?.mark || "noreceive mark"}</b>{" "}
            </small>
            {" -"} x{productDetail.qty}
          </div>
          <Price price={productsDT?.price * productDetail.qty} />
        </>
      )}
    </Invoicecard>
  )
}
interface productRaw {
  name: string
  mark: string
  price: number
}
