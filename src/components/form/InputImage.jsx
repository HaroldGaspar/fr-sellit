import React, { useRef } from "react";
// import { changeImageInput, showFiles } from "../../services";
import "./DragAndDrop.css";

export default function InputImage() {
  // const preview = useRef()

  let files;
  const dropArea = document.querySelector(".drop-area");
  const dragText = dropArea.querySelector("h4");
  const input = dropArea.querySelector("#input-file");
  // const preview = document.querySelector("#preview");

  dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent = "Suelta_las_imagenes";
  });

  dropArea.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastra y suelta tus imagenes";
  });

  dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("tame drop");
    files = e.dataTransfer.files;
    showFiles(files);
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastra y suelta tus imagenes";
  });
  const clickButton = (e) => {
    console.log("click");
    input.click();
  };

  //===================================================
  function changeImageInput(e, files) {
    e.preventDefault();

    //, dropArea) {
    console.log("tame change");
    files = e.target.files;
    dropArea.classList.add("active");
    showFiles(files); //, preview);
    dropArea.classList.remove("active");
  }
  //===================================================

  function showFiles(files) {
    //un archivo o varios?
    console.log("multiply ", files);
    if (files.length === undefined) {
      processFile(files);
    } else {
      console.log("multiply ", files.length);
      for (const file of files) {
        processFile(file);
      }
    }
  }

  function processFile(file) {
    console.log("time");
    const docType = file.type;
    const validExtensions = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
    ];

    if (validExtensions.includes(docType)) {
      const fileReader = new FileReader();
      const id = `file-${Math.random().toString(32).substring(7)}`;
      fileReader.addEventListener("load", (e) => {
        //activado
        const fileUrl = fileReader.result;
        const image = `
            <div id="${id}" class="file-container">
              <img src="${fileUrl}" alt="${file.name}" width="50">
              <div class="status">
                  <span>${file.name}</span>
                  <span class="status-text">
                  Loading...</span>
              </div>
            </div>
            `;
        const html = document.querySelector("#preview").innerHTML;
        document.querySelector("#preview").innerHTML = image + html;
      });

      fileReader.readAsDataURL(file); //activador
      uploadFile(file, id); //will be update the loading span
    } else {
      alert("Inserte una imagen");
    }
  }

  function uploadFile() {
    const formData = new FormData();
    formData.append("file");
  }

  //===================================================

  return (
    <div className="form-group">
      <label htmlFor="category">Imagen</label>

      <div className="drop-area">
        <h4>Arrastra y suelta la imagen</h4>
        <span>O</span>
        <button type="button" onClick={() => clickButton()}>
          Selecciona tus archivos
        </button>
        <input
          type="file"
          name="img"
          id="input-file"
          hidden
          multiple
          onChange={(e) => changeImageInput(e, dropArea, files)}
        />
      </div>
      <div id="preview"></div>
    </div>
  );
}
