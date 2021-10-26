import { Price } from "components"
import styled from "styled-components"
// import "./Invoice.css"

export function InvoiceDetail({ productDetail }) {
  return (
    <Invoicecard>
      <div className="cardt__name">
        {productDetail.productName || "noreceive name"} -
        {productDetail.mark || "noreceive mark"} -<b> X {productDetail.qty}</b>
      </div>
      <Price price={productDetail.productPrice * productDetail.qty} />
    </Invoicecard>
  )
}

const Invoicecard = styled.div`
  margin-top: 0.25em;
  padding: 0.5em 1em;
  border: 1px solid #ebebeb;
  background: #fff;
  border-radius: 4px;
  background: #fff;
`
