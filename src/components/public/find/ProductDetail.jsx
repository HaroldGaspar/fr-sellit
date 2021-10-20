import { ReviewForm } from "../../customer/review/ReviewForm"
import { ReviewsList } from "../../customer/review/ReviewsList"
import styled from "styled-components"

const ContainerHome = styled.div`
  min-height: 100vh;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 0 11px;
`
export function ProductDetail() {
  return (
    <>
      <ContainerHome>
        <div className="container">
          <div className="productdetail">
            <h2 className="productdetail__title">Detail of product</h2>
            <div className="productdetail__img">product photo</div>
            <div className="productdetail__name">name</div>
          </div>
          <div className="productreview">
            <ReviewsList />
            <ReviewForm />
          </div>
        </div>
      </ContainerHome>
    </>
  )
}
