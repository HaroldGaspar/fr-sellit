import axios from "axios"
import { API_URL } from "../settings"

export const addProduct = async (
  e,
  product,
  setProduct,
  products,
  setProducts,
  productInput,
  // formData,
  imgid,
  dfProduct
) => {
  e.preventDefault()
  const token = localStorage.getItem("token")

  console.log("dfProduct", dfProduct)

  // new upload()
  // imgSS.current.click()
  console.log(document.getElementById(imgid))
  document.getElementById(imgid)
    ? document.getElementById(imgid).remove()
    : console.log("therisnt image")

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
    category: product.category | 0,
    name: product.name,
    mark: product.mark,
    price: parseFloat(product.price).toFixed(2),
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
    category: product.category || "",
    name: dfProduct.name || "",
    mark: dfProduct.mark || "",
    price: dfProduct.price || "",
    description: dfProduct.description || "",
    stock: dfProduct.stock || ""
  })
  //ref
  productInput?.current?.focus()
}
