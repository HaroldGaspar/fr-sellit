import { API_URL } from "services/settings"
import { Iproduct } from "models/Product"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

interface props {
  images: string[]
  products: any[]
  autoPlay?: boolean
  showButtons?: boolean
}

export default function Carousel({
  showButtons,
  images,
  autoPlay,
  products
}: props) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState<any[]>()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (autoPlay || !showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images)
      }, 1500)
      return () => clearInterval(interval)
    }
  })

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next
        ? selectedIndex < products.length - 2
        : selectedIndex > 0
      const nextIndex = next
        ? condition
          ? selectedIndex + 2
          : 0
        : condition
        ? selectedIndex - 2
        : products.length - 2
      setSelectedProduct([products[nextIndex], products[nextIndex + 1]])
      setSelectedIndex(nextIndex)
    }, 500)
  }

  const previous = () => {
    selectNewImage(selectedIndex, products, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, products)
  }
  return (
    <>
      {selectedProduct ? (
        <>
          <Link
            to={`/product/${selectedProduct[0].id}`}
            className="Product-link"
          >
            <CarouselImg
              src={`${API_URL}${selectedProduct[0].photo}`}
              alt=""
              className={loaded ? "loaded" : ""}
              onLoad={() => setLoaded(true)}
            />
          </Link>
          <Link
            to={`/product/${selectedProduct[1].id}`}
            className="Product-link"
          >
            <CarouselImg
              src={`${API_URL}${selectedProduct[1].photo}`}
              alt=""
              className={loaded ? "loaded" : ""}
              onLoad={() => setLoaded(true)}
            />
          </Link>
        </>
      ) : products ? (
        <>
          <CarouselImg
            src={`${API_URL}${products[0]?.photo}`}
            // src={images[0]}
            alt=""
            className={loaded ? "loaded" : ""}
            onLoad={() => setLoaded(true)}
          />
          <CarouselImg
            src={`${API_URL}${products[1]?.photo}`}
            alt=""
            className={loaded ? "loaded" : ""}
            onLoad={() => setLoaded(true)}
          />
        </>
      ) : (
        <></>
      )}

      <CarouselButtonContainer>
        {showButtons ? (
          <>
            <CarouselButton onClick={previous}>{"<"}</CarouselButton>
            <CarouselButton onClick={next}>{">"}</CarouselButton>
          </>
        ) : (
          <></>
        )}
      </CarouselButtonContainer>
    </>
  )
}
const CarouselImg = styled.img`
  min-height: 500px;
  max-width: 500px;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`

const CarouselButtonContainer = styled.div`
  text-align: center;
  margin-top: 15px;
`

const CarouselButton = styled.button`
  color: white;
  background-color: #d47fae;
  padding: 0.75em 2em;
  margin: 0 5px;
  border: none;
  border-radius: 4%;
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) all;
  &:hover {
    background-color: #b45f8e;
  }
  &:focus {
    background-color: #a46f7e;
  }
`
