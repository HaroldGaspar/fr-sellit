import {
  Nav,
  ProductDetail,
  ReviewForm,
  ReviewsList,
  Spinner
} from "components"
import { Iproduct } from "models/Product"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getProduct } from "services"
import { getReviewByProduct } from "services/customer/reviews/getReviewByProduct"
import styled from "styled-components"

export function Product() {
  const { id } = useParams<any>()

  const [productDetail, setProductDetail] = useState<Iproduct>()
  const [reviews, setReviews] = useState([])
  const [loading, setloading] = useState(true)
  useEffect(() => {
    getProduct(id, setProductDetail, setloading, setReviews)
  }, [setProductDetail, setloading, id])

  return (
    <>
      <Nav />
      {loading ? (
        <Spinner />
      ) : (
        <ContainerDetail>
          <ProductDetail loading={loading} productDetail={productDetail} />
          <div className="productreview">
            <ReviewsList reviews={reviews} />
            <ReviewForm
              loading={loading}
              idProduct={productDetail.id}
              reviewLength={reviews.length | 0}
              pdRating={productDetail.rating}
            />
          </div>
        </ContainerDetail>
      )}
    </>
  )
}

const ContainerDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 15 px;
  max-width: 1000px;
  margin: 1em auto;
  padding: 0 15px;

  .card__subtitle {
    display: flex;
  }
  .card__stars {
    color: gold;
  }

  .card__nostars {
    color: #bbb;
  }
`
