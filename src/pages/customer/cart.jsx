import { Nav, ProductsCart, OrderCart } from "components"
import { ProductsDtContextProvider } from "context"
import styled from "styled-components"
// import "./Cart.css"

export function Cart() {
  return (
    <>
      <Nav />
      <CartContainer>
        <CartCardls>
          <CartH2>CARRITO</CartH2>
          <ProductsCart />
        </CartCardls>
        <OrderCart />
      </CartContainer>
    </>
  )
}
const CartContainer = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0 2em;
  padding: 0 15px;

  @media (max-width: 800px) {
    max-width: 500px;
    grid-template-columns: 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  @media (max-width: 300px) {
    grid-template-columns: minmax(0px, 1fr);
  }
`
const CartCardls = styled.div`
  height: 85vh;
  overflow: auto;
  margin: 1em auto;
  /* border-radius: 4px; */
`
const CartH2 = styled.h2`
  padding: 0.6em 1.2em;
  // background-color: #b998c7;
  text-align: center;
  // color: #ececec;
  // text-decoration: underline;
  font-weight: 700;
  font-style: italic;
`
