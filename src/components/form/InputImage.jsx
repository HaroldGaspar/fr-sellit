import React, { useEffect, useRef } from "react"
// import { changeImageInput, showFiles } from "../../services";
import "./DragAndDrop.css"

export default function InputImage({ handleUploadFormSubmit, imgSS }) {
  // const preview = useRef()

  let files

  const drop_Area = useRef()
  const drag_Text = useRef()
  const input_i = useRef()
  const preview_i = useRef()

  useEffect(() => {
    const dropArea = drop_Area.current
    const dragText = drag_Text.current

    dropArea.addEventListener("dragover", (e) => {
      e.preventDefault()
      dropArea.classList.add("active")
      dragText.textContent = "Suelta_las_imagenes"
    })

    dropArea.addEventListener("dragleave", (e) => {
      e.preventDefault()
      dropArea.classList.remove("active")
      dragText.textContent = "Arrastra y suelta tus imagenes"
    })

    dropArea.addEventListener("drop", (e) => {
      e.preventDefault()
      console.log("tame drop")

      files = e.dataTransfer.files //input_i.current.target //
      showFiles(files)

      dropArea.classList.remove("active")
      dragText.textContent = "Arrastra y suelta tus imagenes"
    })
  }, [])
  const clickButton = (e) => {
    console.log("click")
    input_i.current.click()
  }
  //===================================================
  function changeImageInput(e, dropArea, files) {
    e.preventDefault()

    //, dropArea) {
    console.log("tame change")
    files = e.target.files
    dropArea.classList.add("active")
    showFiles(files) //, preview);
    dropArea.classList.remove("active")
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
      fileReader.addEventListener("load", (e) => {
        //activado
        const fileUrl = fileReader.result
        const image = `
            <div id="${id}" class="file-container">
              <img src="${fileUrl}" alt="${file.name}" width="50">
              <div class="status">
                  <span>${file.name}</span>
                  <span class="status-text">
                  Loading...</span>
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
    <div className="form-group">
      <label htmlFor="category">Imagen</label>

      <div className="drop-area" ref={drop_Area}>
        <h4 ref={drag_Text}>Arrastra y suelta la imagen</h4>
        <span>O</span>
        <button type="button" onClick={() => clickButton()}>
          Selecciona tus archivos
        </button>
        <form id="upload-form" onSubmit={handleUploadFormSubmit}>
          <input
            type="file"
            name="files"
            ref={input_i}
            hidden
            multiple
            onChange={(e) => changeImageInput(e, drop_Area.current, files)}
          />
          <button
            type="submit"
            ref={imgSS}
            className="input-image__btn-sumbit"
          />
        </form>
      </div>
      <div id="preview" ref={preview_i}></div>
    </div>
  )
}
