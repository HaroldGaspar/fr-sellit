import { IdfProduct, Iproduct } from "models/Product"
import { Dispatch, SetStateAction } from "react"
import { persistEntity, uploadImage } from "services"

export const addProduct = async (
  product: Iproduct,
  setProduct: Dispatch<SetStateAction<Iproduct>>,
  products: Iproduct[],
  setProducts: Dispatch<SetStateAction<Iproduct[]>>,
  dfProduct: IdfProduct
) => {
  //img
  console.log("dfProduct", dfProduct)
  const imgUrl = await uploadImage()

  //newProduct
  const newProduct = {
    category: product.category | 0,
    name: product.name,
    mark: product.mark,
    price: product.price, //.toFixed(2),
    stock: product.stock | 0,
    description: product.description,
    store: localStorage.getItem("store"),
    photo: imgUrl,
    rating: 0
  }
  console.log("saving ", newProduct, " with ") //, document.getElementById("iii"))

  //persisten
  try {
    await persistEntity("products", newProduct)
    setProducts([...products, newProduct])
  } catch (error) {
    console.error("error", error)
  }

  //format
  // document.getElementById("preview-img")
  //   ? document.getElementById("preview-img").remove()
  //   : console.log("therisnt preview-img")

  setProduct({
    category: product.category || 0,
    name: dfProduct.name || "",
    mark: dfProduct.mark || "",
    price: dfProduct.price || 0,
    description: dfProduct.description || "",
    stock: dfProduct.stock || 0
  })
}
