import { Nav, ProductsCart, OrderCart } from "components"
import { ProductsDtContextProvider } from "context"
import styled from "styled-components"
// import "./Cart.css"

export function Cart() {
  return (
    <>
      <Nav />
      <ProductsDtContextProvider>
        <CartContainer>
          <CartCardls>
            <CartH2>Carrito</CartH2>
            <ProductsCart />
          </CartCardls>
          <div className="order">
            <OrderCart />
          </div>
        </CartContainer>
      </ProductsDtContextProvider>
    </>
  )
}
const CartContainer = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0 3em;
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
  padding: 10px;
  background-color: #b998c7;
`