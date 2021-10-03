// import React from "react";

// export function changeImageInput(e, dropArea, files) {
//   //, preview) {
//   files = e.target.files;
//   dropArea.classList.add("active");
//   showFiles(files); //, preview);
//   dropArea.classList.remove("active");
// }

// export function showFiles(files) {
//   //, preview) {
//   //un archivo o varios?
//   if (files.length === undefined) {
//     processFile(files); //, preview);
//   } else {
//     for (const file of files) {
//       processFile(file);
//     }
//   }
// }

// function processFile(file) {
//   //, preview){
//   const docType = file.type;
//   const validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

//   if (validExtensions.includes(docType)) {
//     const fileReader = new FileReader();
//     const id = `file-${Math.random().toString(32).substring(7)}`;
//     fileReader.addEventListener("load", (e) => {
//       //activado
//       const fileUrl = fileReader.result;
//       const image = `
//           <div id="${id}" class="file-container">
//             <img src="${fileUrl}" alt="${file.name}" width="50">
//             <div class="status">
//                 <span>${file.name}</span>
//                 <span class="status-text">
//                 Loading...</span>
//             </div>
//           </div>
//           `;
//       preview.innerHTML = image + preview.innerHTML;
//     });

//     fileReader.readAsDataURL(file); //activador
//     uploadFile(file, id); //will be update the loading span
//   } else {
//     alert("Inserte una imagen");
//   }
// }

// function uploadFile() {}
