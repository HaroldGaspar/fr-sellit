import { ChangeEvent } from "react"
import styled from "styled-components"

export function InputImage({
  imageSelectedPrevious,
  setImageSelectedPrevious
}: any) {
  //========= Show img preview =======================
  function changeImageInput(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (e) => {
        e.preventDefault()
        setImageSelectedPrevious(e.target?.result) // le damos el binario de la imagen para mostrarla en pantalla
      }
    }
  }
  //===================================================

  return (
    <div className="form__groupimg">
      <label className="form__label">
        Imagen <small className="text-danger">*selecciona una imagen</small>{" "}
        <StyleDragArea>
          <div className="image-upload-wrap">
            <input
              type="file"
              name="files"
              multiple
              onChange={(e) => changeImageInput(e)}
              required
              className="file-upload-input"
            />
            <div className="text-information">
              <h3>Selecciona tu archivo</h3>
            </div>
          </div>
          <div className={imageSelectedPrevious ? "center" : "dnino"}>
            <img
              id="preview-img"
              src={imageSelectedPrevious?.toString()}
              alt=""
              height="80px"
              width="80px"
            />
            {imageSelectedPrevious?.name}
          </div>
        </StyleDragArea>
      </label>
    </div>
  )
}
const StyleDragArea = styled.div`
  .dnino {
    display: none;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .file-upload-content {
    display: none;
    text-align: center;
  }
  .file-upload-input {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    cursor: pointer;
  }
  .image-upload-wrap {
    position: relative;
    height: 100px;
    border: 4px solid #d0d7de;
    margin-left: 10px;
    margin-right: 10px;
  }
  .image-upload-wrap:hover {
    background-color: transparent;
    border: 4px dashed #d0d7de;
  }
  .text-information {
    margin-top: 10px;
    text-align: center;
  }
`
