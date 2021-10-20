import { ChangeEvent, useEffect, useRef } from "react"
import styled from "styled-components"

export function ScrollItem() {
  /* We define our function 🕹 */
  const replaceMvt = (event) => {
    if (event.deltaY !== 0) {
      // manually scroll horizonally instead
      window.scroll(window.scrollX + event.deltaY * 5, window.scrollY)

      // prevent vertical scroll
      event.preventDefault()
    }
  }

  return (
    <StyleScrollArea>
      <div className="wrapper" id="b" onWheel={replaceMvt}>
        {[1, 1, 1, 1, 1, 1, 1, 1].map((e) => (
          <div className="wrapper__item">
            <img src="" alt="" />
          </div>
        ))}
      </div>
    </StyleScrollArea>
  )
}

const StyleScrollArea = styled.div`
  .wrapper {
    max-width: 500px;
    border: 1px solid #ddd;
    display: flex;
    overflow-x: auto;
    touch-action: pan-y;
  }

  .wrapper::-webkit-scrollbar {
    width: 0;
    // background-color: #999;
  }
  .wrapper::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 3px;
    width: 0;
  }
  .wrapper__item {
    min-width: 150px;
    line-height: 150px;
    text-align: center;
    background-color: #444;
    margin: 2px;
  }
`
