import { InvoiceDetail, Price } from "components"
import React from "react"
import { useHistory } from "react-router"

export function Invoice({ location }: any) {
  const history = useHistory()
  console.log("recibing data", location.state.data)
  console.log("reciving products", location.state.productsDetail)
  return (
    <div>
      <div className="col-4 mx-auto mt-4">
        <div className="card">
          <div className="card-body">
            <h2>Compra exitosa</h2>
            <p>
              codigo de transaccion:
              <div className="ml-auto text-right">{location.state.data.id}</div>
            </p>
            <p>
              pago realizado: <Price price={location.state.data.amount / 100} />{" "}
            </p>
            <p>productos:</p>
            {location.state.productsDetail.map(
              (productDetail: any, id: number) => (
                <InvoiceDetail productDetail={productDetail} key={id} />
              )
            )}
            <button onClick={() => history.push("/")}>return</button>
          </div>
        </div>
      </div>
    </div>
  )
}
