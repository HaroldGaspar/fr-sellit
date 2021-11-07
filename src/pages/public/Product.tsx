import {
  Nav,
  ProductDetail,
  ReviewForm,
  ReviewsList,
  Spinner
} from "components"
import { Iproduct, IReview } from "models/Product"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getProduct } from "services"
import { getReviewByProduct } from "services/customer/reviews/getReviewByProduct"
import styled from "styled-components"
export function Product() {
  const { id } = useParams<any>()

  const [productDetail, setProductDetail] = useState<Iproduct>()
  const [reviews, setReviews] = useState<any>()
  const [loading, setloading] = useState(true)

  const init = async () => {
    setloading(true)
    await getProduct(id, setProductDetail)
    await getReviewByProduct(parseInt(id), setReviews)
    setloading(false)
  }
  useEffect(() => {
    init()
  }, [setProductDetail, setloading, id])

  return (
    <>
      <Nav />
      {loading ? (
        <Spinner />
      ) : (
        <ContainerDetail>
          <ProductDetail
            productDetail={productDetail}
            reviewLength={reviews.length | 0}
          />
          <div className="productreview">
            <ReviewsList reviews={reviews} reviewLength={reviews.length | 0} />
            {localStorage.getItem("user") ? (
              <ReviewForm
                idProduct={productDetail.id}
                reviewLength={reviews.length | 0}
                pdRating={productDetail.rating | 0}
                setProductDetail={setProductDetail}
                productDetail={productDetail}
                reviews={reviews}
                setReviews={setReviews}
              />
            ) : (
              <div className="text-center mt-4 pt-4">
                <b>logeate para comentar</b>
              </div>
            )}
          </div>
        </ContainerDetail>
      )}
    </>
  )
}

export const ContainerDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
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

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
