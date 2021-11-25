import React from "react"
import styled from "styled-components"

export function ModalHC({
  component,
  show,
  setShow,
  color = "#fbfbf8",
  style = "one"
}: props) {
  return (
    <StylesModal
      style={
        show
          ? {
              visibility: "visible",
              opacity: "1"
            }
          : {}
      }
    >
      <div
        className="modal__content"
        style={
          show
            ? style === "one"
              ? {
                  backgroundColor: color,
                  transform: "rotateX(0) scale(1) translateY(0)"
                }
              : style === "two"
              ? { backgroundColor: color, transform: "scale(1) translateY(0)" }
              : {
                  backgroundColor: color,
                  transform: "transform: translateY(10%)"
                }
            : style === "one"
            ? {
                transform: "rotateX(65deg) scale(0.75) translateY(10%)",
                transformOrigin: "50% 100%"
              }
            : style === "two"
            ? { transform: "scale(0.5) translateY(10%)" }
            : { transform: "translateY(0)" }
        }
      >
        <div
          className="modal__close"
          onClick={() => setShow(false)}
          title="Close"
        >
          <i className="bx bx-x"></i>
        </div>
        {component}
      </div>
    </StylesModal>
  )
}

interface props {
  component: any
  show: boolean
  setShow: any
  color?: string
  style?: string
}
const StylesModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: grid;
  align-items: flex-end;
  overflow: hidden;
  transition: all 0.3s;
  z-index: 1000;
  visibility: hidden;
  opacity: 0;

  .modal__content {
    position: relative;

    padding: 3.6rem 2.6rem 2.6rem 2.6rem;
    border-radius: 1rem 1rem 0 0;
    transition: all 0.3s;
  }

  .modal__close {
    display: inline-flex;
    background-color: #f00;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 2rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    transition: 0.3s ease all;
  }

  .modal__close:hover {
    background-color: #b22;
  }

  @media screen and (min-width: 576px) {
    .modal__content {
      margin: auto;
      width: 540px;
      border-radius: 0.25rem;
    }
  }
`
