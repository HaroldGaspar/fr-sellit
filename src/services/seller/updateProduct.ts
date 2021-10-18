import { Iproduct } from "models/Product"
import { Dispatch, SetStateAction } from "react"
import { persistEntity } from "services"

/**
 * Persist the data updated of an Product and
 * the state products which have the product
 * @param product state that the form use
 * @param setProduct fx state dispatch
 * @param products state that the list use
 * @param setProducts fx states dispatch
 * @param setshowUpdate fx boolean dispatch
 */
export const updateProduct = (
  product: Iproduct,
  setProduct: Dispatch<SetStateAction<Iproduct>>,
  products: Iproduct[],
  setProducts: Dispatch<SetStateAction<Iproduct[]>>,
  setshowUpdate: Dispatch<SetStateAction<boolean>>
) => {
  const newProduct = {
    category: product.category, //?.id, //no soportaba un objeto
    name: product.name,
    mark: product.mark,
    price: product.price, //
    description: product.description,
    stock: product.stock //
  }

  persistEntity("products", newProduct, product.id)

  //render list
  console.log("new product", product)
  const productsEdited: Iproduct[] = [...products]
  const productFiltered: number = products.findIndex((p) => p.id === product.id)
  productsEdited[productFiltered] = newProduct
  setProducts(productsEdited)

  //form
  setshowUpdate(false)
  setProduct({
    ...product,
    category: 0,
    name: "",
    mark: "",
    price: 0,
    description: "",
    stock: 0
  })
}
