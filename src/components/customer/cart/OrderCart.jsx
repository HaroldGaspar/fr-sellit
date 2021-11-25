import ProductContext from "context/ProductsDtContex"
import { useContext, useState } from "react"
import { Card, InvoiceDetail, ModalHC, Price } from "components"
import { addCartWithOrderDetail } from "services"
import styled from "styled-components"

export function OrderCart() {
  const { productsDetail, setProductsDetail } = useContext(ProductContext)
  const [showCard, setShowCard] = useState(false)

  const handleSellCart = async (idTransaccion) => {
    const num = productsDetail.map((p) => p.totalPrice).reduce((p, n) => p + n)
    const res = await addCartWithOrderDetail(num, "credit_card", idTransaccion)
    console.log("res updt cart to: ", res)
    return num
  }

  console.log("lengt", productsDetail.length)
  return (
    <OrdrCart>
      <div className="center">
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
        </div>
        <button
          onClick={() => {
            setShowCard((st) => !st)
          }}
          className="order__btn"
          id="open-modal"
        >
          Comprar ahora
        </button>
      </div>

      <ModalHC
        component={
          <Card
            handleSellCart={handleSellCart}
            productsDetail={productsDetail}
            setShowCard={setShowCard}
          />
        }
        show={showCard}
        setShow={setShowCard}
      />
    </OrdrCart>
  )
}

const OrdrCart = styled.div`
  height: -webkit-fill-available;
  margin: 1em 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .order {
    /* position: relative; */
  }
  .order__title {
    text-align: center;
    padding: 0.4em;
    font-weight: 400;
    text-decoration: underline;
    color: #ebebeb;
    font-style: italic;
    font-size: 40px;
  }

  .order__invoicels {
    height: 300px;
    overflow: auto;
  }

  .tt {
    padding-top: 1.3em;
    font-size: 1.5em;
    margin: auto 1.5em;
    display: grid;
    grid-auto-flow: column;
    justify-content: end;
  }

  .tt .price {
    font-size: 30px;
  }

  .order__btn {
    background: #d9b8e6;
    color: #8b6f97;
    font-weight: 700;
    border-radius: 4px;
    border: none;
    padding: 0.35em 0.5em;
    transition: 0.5s ease all;
    margin: 0 auto;
    font-size: 24px;
    width: 100%;
  }

  .order__btn:hover {
    color: #b998c7;
    background: #efddf6;
  }

  .center {
    background-color: #b998c7;
    padding: 2.5em 1em 1.5em 1em;
    border-radius: 4px;
  }
`
