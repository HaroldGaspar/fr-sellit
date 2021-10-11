import { Price } from "components"
import "./Invoice.css"

export function InvoiceDetail({ productDetail, setProductDetail }) {
  return (
    <div className="invoicecart">
      <div className="cartdt__invoice">
        <div className="cardt__name">
          {productDetail.productName || "noreceive name"} -
          {productDetail.mark || "noreceive mark"} -
          <b> X {productDetail.qty}</b>
        </div>
        <Price price={productDetail.totalPrice} />
      </div>
    </div>
  )
}
