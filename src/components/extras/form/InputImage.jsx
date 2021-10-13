import React, { useEffect, useRef } from "react"
// import { changeImageInput, showFiles } from "../../services";
import "./InputImage.css"

export function InputImage({ setImgid }) {
  // const preview = useRef()

  let files

  const input_i = useRef()
  const preview_i = useRef()

  const clickButton = (e) => {
    console.log("click")
    input_i.current.click()
  }
  //===================================================
  function changeImageInput(e, files) {
    e.preventDefault()

    //, dropArea) {
    console.log("tame change")
    files = e.target.files
    showFiles(files) //, preview);
  }
  //===================================================

  function showFiles(files) {
    //un archivo o varios?
    console.log("multiply ", files)
    if (files.length === undefined) {
      processFile(files)
    } else {
      console.log("multiply ", files.length)
      for (const file of files) {
        processFile(file)
      }
    }
  }

  function processFile(file) {
    console.log("time")
    const docType = file.type
    const validExtensions = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif"
    ]

    if (validExtensions.includes(docType)) {
      const fileReader = new FileReader()
      const id = `file-${Math.random().toString(32).substring(7)}`
      setImgid(id)
      fileReader.addEventListener("load", (e) => {
        //activado
        const fileUrl = fileReader.result
        const image = `
            <div id="${id}" class="file-container">
              <img src="${fileUrl}" alt="${file.name}" width="50">
              <div class="status">
                  <span>${file.name}</span>
                  <span class="status-text">
                  Listo</span>
              </div>
            </div>
            `
        const html = preview_i.current.innerHTML
        preview_i.current.innerHTML = image + html
      })

      fileReader.readAsDataURL(file) //activador
    } else {
      alert("Inserte una imagen")
    }
  }

  //===================================================

  return (
    <div className="form__group">
      <label className="form__label">
        Imagen <small className="text-danger">*selecciona una imagen</small>{" "}
        <div className="drop-area">
          <button type="button" onClick={() => clickButton()}>
            Selecciona tu archivo
          </button>
          <form id="upload-form">
            <input
              type="file"
              name="files"
              ref={input_i}
              hidden
              multiple
              onChange={(e) => changeImageInput(e, files)}
              required
            />
          </form>
        </div>
      </label>
      <div id="preview" ref={preview_i}></div>
    </div>
  )
}
