import { ReviewForm } from "../../customer/review/ReviewForm"
import { ReviewsList } from "../../customer/review/ReviewsList"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { getProduct } from "services"
import { useParams } from "react-router"

const ContainerHome = styled.div`
  min-height: 100vh;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 0 11px;
`
export function ProductDetail() {
  const { id } = useParams()
  const [productDetail, setProductDetail] = useState()
  const [loading, setloading] = useState()
  useEffect(() => {
    getProduct(id, setProductDetail, setloading)
  }, [])

  return (
    <>
      <ContainerHome>
        {/* {loading ? ( */}
        <div className="container">
          <div className="productdetail">
            <h2 className="productdetail__title">Detail of product detail percy</h2>
            <div className="productdetail__img">{productDetail?.photo}</div>
            <div className="productdetail__name">{productDetail?.name}</div>
          </div>
          <div className="productreview">
            <ReviewsList />
            <ReviewForm />
          </div>
        </div>
        {/* ) : (
          ""
        )} */}
      </ContainerHome>
    </>
  )
}
