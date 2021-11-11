import { InvoiceDetailModal, ModalHC, Price } from "components"
import { Icart } from "models/Product"
import React, { useState } from "react"

export function InvoiceDetailView({ cart }: any) {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <div className="invoicecard">
      <div className="ell">Id de transaccion: {cart.transaction}</div>
      <div>Fecha: {cart.updated_at}</div>
      <div>
        Compraste{" "}
        {cart.product_details
          .map((pd: any) => pd.qty)
          .reduce((p: number, n: number) => p + n, 0)}{" "}
        unidades de {cart.product_details.length} productos
      </div>
      <div className="id-cod">
        <button
          onClick={() => {
            setShowDetail((st) => !st)
          }}
        >
          ver detalle
        </button>
        <Price price={cart.total_price} />
      </div>
      <ModalHC
        component={<InvoiceDetailModal invoice={cart} />}
        show={showDetail}
        setShow={setShowDetail}
        style={"two"}
        color={"#e5dfdf"}
      />
    </div>
  )
}

interface props {
  cart: Icart
}
