export interface Iuser {
  email: string
  password: string
  name?: string
  password_confirm?: string
  store_name?: string
}

export interface Iproduct {
  id?: number
  category: number
  name: string
  mark: string
  price: number
  description: string
  stock: number
  photo?: string
  rating?: number
  reviews?: any[]
  categoryName?: string

  storeName?: string
  storeId?: number
}

export interface IdfProduct {
  name?: string
  mark?: string
  price?: number
  description?: string
  stock?: number
}
export interface IproductDetail {
  productDetailId: number
  qty: number
  stock: number
  productPrice: number
  totalPrice: number
  mark: string
  productName: string
  productPhoto: string
  productId: number

  storeName: string
  storeId: number
}

export interface Icategory {
  id: number
  name: string
  gender: string
}

export interface Icustomer {
  id: number
  userId: number
  storeId: number
  isSeller: boolean
}

export interface Istore {
  id: number
  name: string
  address: string
  description: string
  phoneNumber: string
  customerId: number
}

export interface Icart {
  id: number
  total_price: number
  payMethod: string
  is_actual: boolean
  customerId: number
  product_details: any[]
  updated_at: string
  transaction: string
}

export interface IReview {
  product: number
  stars?: number
  comment?: string
  pdRating?: number
  customer?: string
  slug?: string
}
