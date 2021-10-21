import ProductContext from "context/ProductsDtContex"
import { useContext, useEffect } from "react"
import { Card, InvoiceDetail, Price } from "components"
import { addCartWithOrderDetail } from "services"
import styled from "styled-components"

// import "./Order.css"

export function OrderCart() {
  const { productsDetail, setProductsDetail } = useContext(ProductContext)

  const handleSellCart = async () => {
    const num =
      productsDetail.length === 0
        ? "0"
        : productsDetail.map((p) => p.totalPrice).reduce((p, n) => p + n)

    // const tp = parseFloat(num).toFixed(2)
    const res = await addCartWithOrderDetail(num, "credit_card")
    console.log("res updt cart to: ", res)
  }

  console.log("lengt", productsDetail.length)
  return (
    <OrdrCart>
      <div className="invoicecart">
        <h2 className="order__title">Estas comprando</h2>
        <div className="order__invoicels">
          {productsDetail.map((productDetail, id) => (
            <InvoiceDetail
              productDetail={productDetail}
              setProductsDetail={setProductsDetail}
              key={id}
            />
          ))}
        </div>
        <div className="tt">
          Total a pagar:
          <Price
            price={
              productsDetail.length === 0
                ? "0"
                : productsDetail
                    .map((p) => p.totalPrice)
                    .reduce((p, n) => p + n)
            }
          />
          <button onClick={() => handleSellCart()} className="order__btn">
            Comprar ahora
          </button>
        </div>
      </div>
      <Card />
    </OrdrCart>
  )
}

const OrdrCart = styled.div`
  .order {
    /* position: relative; */
  }
  .order__title {
    text-align: center;
  }
  .invoicecart {
    background-color: #fbfbfb;
    margin: 1em 0;
    padding: 0.5em 1em;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 4px;
  }

  .order__invoicels {
    height: 45vh;
    overflow: auto;
  }

  @media (max-height: 650px) {
    .order__invoicels {
      height: 40vh;
    }
  }

  .tt {
    padding-top: 1.3em;
    text-align: center;
    font-size: 1.5em;
    height: 170px;
  }

  .tt .price {
    display: flex;
    margin: 0 auto;
    width: 3em;
    font-size: 30px;
  }

  .order__btn {
    background: #b998c7;
    color: #fbfbfb;
    font-weight: 700;
    border-radius: 4px;
    border: none;
    padding: 0.35em 0.5em;
    transition: 0.5s ease all;
    margin: 0 auto;
  }

  .order__btn:hover {
    color: #b998c7;
    background: #fbfbfb;
  }
`
