import { Price } from "components"
import React, { useEffect, useState } from "react"
import { getByField } from "services"
import styled from "styled-components"

export default function InvoiceByCustomer() {
  const [cart, setCart] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)
  const idUser = localStorage.getItem("user").split(":")[1].split(",")[0]
  const idCustomer = localStorage.getItem("customer")

  useEffect(() => {
    getByField("carts", "customer", idCustomer, setCart, setLoading, false)
  }, [])
  return (
    <InvoicesByCustomerStyles>
      <h1>FACTURAS</h1>
      {loading ? (
        "loading"
      ) : (
        <List>
          {cart.map((c: any, i: number) => {
            if (c.is_actual === false)
              return (
                <div className="invoicecard" key={i}>
                  <div>Id de transaccion: {c.transaction}</div>
                  <div>Fecha: {c.updated_at}</div>
                  <div>
                    Compraste{" "}
                    {c.product_details
                      .map((pd: any) => pd.qty)
                      .reduce((p: number, n: number) => p + n, 0)}{" "}
                    unidades de {c.product_details.length} productos
                  </div>
                  <button>ver detalle</button>
                  <Price price={c.total_price} />
                </div>
              )
            else return ""
          })}
        </List>
      )}
    </InvoicesByCustomerStyles>
  )
}

const InvoicesByCustomerStyles = styled.div`
  border: 1px solid #ececec;
  padding: 2em 1em;
  background: #fafafa;
  .invoicecard {
    margin: 0.5em 0;
    padding: 0.5em;
    border-radius: 0.25em;
    // border: 1px solid #eee;
    background: #eaeaea;
    // color: #eee;
  }
`

const List = styled.div`
  height: 50vh;
  overflow: auto;
  .invoicecard {
    padding: 0.5em 1.25em;
  }
`
