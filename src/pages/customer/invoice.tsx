import { InvoiceDetail, Price } from "components"
import React from "react"
import { useHistory } from "react-router"
import styled from "styled-components"

export function Invoice({ location }: any) {
  const history = useHistory()
  console.log("recibing data", location.state.data)
  console.log("reciving products", location.state.productsDetail)
  return (
    <Invoicecard>
      <div className="invoice__card">
        <h2>Compra exitosa</h2>
        <div className="invoice__header">
          <p>
            <b>codigo de transaccion:</b>
            <div className="ml-auto text-right">{location.state.data.id}</div>
          </p>
          {/* <div className="row"> */}
          <div className="subtotal">
            <div>
              Subtotal:
              <Price price={(location.state.data.amount / 100) * 0.82} />{" "}
            </div>
            <div>
              IGV 18%:
              <Price price={(location.state.data.amount / 100) * 0.18} />{" "}
            </div>
          </div>
          {/* </div> */}
          <p>
            <b>Pago realizado:</b>{" "}
            <Price price={location.state.data.amount / 100} />{" "}
          </p>
          <h5>productos</h5>
        </div>
        <div className="invoice_wrapper">
          {location.state.productsDetail.map(
            (productDetail: any, id: number) => (
              <InvoiceDetail key={id} productDetail={productDetail} />
            )
          )}
        </div>
        <button className="id-cod" onClick={() => history.push("/")}>
          Regresar
        </button>
      </div>
    </Invoicecard>
  )
}

export const Invoicecard = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .invoice__header {
    padding: 0 1em;
  }
  h2 {
    color: #efefef;
    font-weight: 700;
    text-align: center;
    font-style: italic;
    text-decoration: underline;
  }

  h5 {
    font-weight: 700;
    text-align: center;
  }

  p {
    color: #555;
  }

  .invoice__card {
    width: 400px;
    height: fit-content;
    background: rgb(185, 152, 199);
    padding: 1.5rem;
    border-radius: 0.25rem;
  }

  .invoice_wrapper {
    padding: 1em 0;
    margin: 0.5em 0;
    height: 300px;
    overflow: auto;

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
  }

  button {
    border: none;
    background: #8b659b;
    color: #eee;
    border-radius: 0.25em;
    padding: 0.35em 0.5em;
    transition: 0.3s ease all;
    width: 100%;
  }
  button:hover {
    background: #d9b8e7;
    color: #444;
    font-weight: 700;
  }
  .subtotal {
    font-style: italic;
    font-size: 0.8rem;
    font-weight: 700;
    text-align: end;
    background: rgb(222 191 235);
    border-radius: 0.5em;
    padding: 1em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 60%;
    margin: 0 auto 1em auto;
  }
`
