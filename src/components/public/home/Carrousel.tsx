import { useEffect, useState } from "react"
import styled from "styled-components"

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
  display: flex;
  align-content: center;
  flex-direction: row;
  margin-top: 15px;
`

const CarouselButton = styled.button`
  color: white;
  background-color: #eb118a;
  padding: 8px;
  margin: 0 5px;
`

interface props {
  images: string[]
  autoPlay?: boolean
  showButtons?: boolean
}

export default function Carousel({ showButtons, images, autoPlay }: props) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])
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
        ? selectedIndex < images.length - 1
        : selectedIndex > 0
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1
      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 500)
  }

  const previous = () => {
    selectNewImage(selectedIndex, images, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, images)
  }
  return (
    <>
      {selectedImage ? (
        <CarouselImg
          src={selectedImage}
          alt=""
          className={loaded ? "loaded" : ""}
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <CarouselImg
          src={images[0]}
          alt=""
          className={loaded ? "loaded" : ""}
          onLoad={() => setLoaded(true)}
        />
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
