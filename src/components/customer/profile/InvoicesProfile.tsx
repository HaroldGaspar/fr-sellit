import { InvoiceDetailView, Price } from "components"
import { Icart } from "models/Product"
import React, { useEffect, useState } from "react"
import { getByField } from "services"
import styled from "styled-components"

export default function InvoicesProfile() {
  const [carts, setCarts] = useState<any[]>()
  const [loading, setLoading] = useState<boolean>(true)
  const idCustomer = localStorage.getItem("customer")

  const init = async () => {
    await getByField("carts", "customer", idCustomer, setCarts, setLoading)
    setTimeout(() => console.log("carritos", carts), 500)
  }

  useEffect(() => {
    init()
  }, [])
  return (
    <InvoicesByCustomerStyles>
      <h3>
        <big>
          <i>FACTURAS</i>
        </big>
      </h3>
      {loading ? (
        "loading"
      ) : (
        <List>
          {carts.length === 1 ? (
            <div className="mssg">you haven't made a purchase yet</div>
          ) : (
            carts.map((cart: any, id: number) => {
              if (cart.is_actual === false)
                return <InvoiceDetailView cart={cart} key={id} />
              else return ""
            })
          )}
        </List>
      )}
    </InvoicesByCustomerStyles>
  )
}

const InvoicesByCustomerStyles = styled.div`
  border: 1px solid #ececec;
  padding: 1.5em 1em;
  background: #b998c7;
  color: #444;
  h3 {
    color: #eaeaea;
    text-align: end;
    margin-right: 1em;
    font-weight: 700;
    text-decoration: underline;
  }
  .invoicecard {
    margin: 0.5em 0;
    padding: 0.75em 1.25em;
    border-radius: 0.25em;
    // border: 1px solid #eee;
    background: #efddf6; //f6f2f2;
    // color: #eee;
  }
  .ell {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  button {
    border: none;
    background: #8b659b;
    color: #eee;
    border-radius: 0.25em;
    padding: 0.35em 0.5em;
    transition: 0.3s ease all;
  }
  button:hover {
    background: #b998c7;
    color: #fff;
  }
  .id-cod {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: flex;
    padding: 0.3em 0;
    justify-content: space-between;
  }
`

const List = styled.div`
  .mssg {
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    content-align: center;
    justify-content: center;
    font-style: italic;
    font-weight: 700;
  }
  height: 70vh;
  overflow: auto;
  @media (max-height: 650px) {
    height: 60vh;
  }

  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 5px;
    background-color: #858585;
    transition-duration: 0s;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #444;
    border-radius: 3px;
  }
`
