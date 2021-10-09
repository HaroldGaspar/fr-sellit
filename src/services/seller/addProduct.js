import axios from "axios"
import { API_URL } from "../settings"

// export async function handleUploadFormSubmit(e) {
//   e.preventDefault()
//   console.log("target", e.target)
//   const formData = new FormData(e.target)
//   console.log(formData)
//   const token = localStorage.getItem("token")

//   try {
//     const uploadHeaders = {
//       "Content-Type": "multippart/form-data",
//       Authorization: `Bearer ${token}`
//     }
//     const resImg = await axios.post(`${API_URL}/upload`, formData, {
//       headers: uploadHeaders
//     })
//     console.log(resImg.data[0].url)
//     // imgUrl = resImg.data[0].url
//   } catch (e) {
//     console.log(e)
//   }
// }

export const addProduct = async (
  e,
  product,
  setProduct,
  products,
  setProducts,
  productInput,
  // formData,
  imgSS
) => {
  e.preventDefault()
  const token = localStorage.getItem("token")

  // new upload()
  // imgSS.current.click()

  const formData = new FormData(document.getElementById("upload-form"))

  const uploadHeaders = {
    "Content-Type": "multippart/form-data",
    Authorization: `Bearer ${token}`
  }
  const resImg = await axios.post(`${API_URL}/upload`, formData, {
    headers: uploadHeaders
  })
  console.log(resImg.data[0].url)
  const imgUrl = resImg.data[0].url

  //newProduct
  const newProduct = {
    // id: getCurrentTimeStamp(),
    category: product.category?.id | 0,
    name: product.name,
    mark: product.mark,
    price: product.price | 0,
    stock: product.stock | 0,
    description: product.description,
    store: localStorage.getItem("store"),
    photo: imgUrl
  }
  console.log("saving ", newProduct, " with ") //, document.getElementById("iii"))

  //persisten

  fetch(`${API_URL}/products`, {
    method: "post",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(newProduct)
  }).catch((e) => console.log(e))

  // setProducts([...products, newProduct])
  setProducts([...products, newProduct])
  //format
  setProduct({
    category: "",
    name: "",
    mark: "",
    price: "",
    description: "",
    stock: ""
  })
  //ref
  productInput?.current?.focus()
}
