import { Price, ProductDetailModal, Spinner } from "components"
import styled from "styled-components"

export function InvoiceDetailModal({ invoice }: any) {
  return (
    <>
      <StyleModal>
        <h2>
          {/* <i> */}
          <b>Detalle</b>
          {/* </i> */}
        </h2>
        <div className="id-cod">
          Codigo de transaccion: <b>{invoice?.transaction}</b>
        </div>
        <div className="id-cod">
          Pago realizado: <Price price={invoice?.total_price} />{" "}
        </div>
        Productos:
        <div className="list">
          {invoice?.product_details?.map((productDetail: any, id: number) => (
            <ProductDetailModal productDetail={productDetail} key={id} />
          ))}
        </div>
      </StyleModal>
    </>
  )
}

const StyleModal = styled.div`
  color: #6a4e4e;
  margin-bottom: 1em;

  p {
    display: flex;
  }
  h2 {
    text-align: center;
    color: #6a4e4e;
  }

  .list {
    padding: 0 1em;
  }
`
