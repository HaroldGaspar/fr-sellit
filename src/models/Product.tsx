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
}

export interface IdfProduct {
  name?: string
  mark?: string
  price?: number
  description?: string
  stock?: number
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
  totalPrice: number
  payMethod: string
  isActual: boolean
  customerId: number
}

export interface IproductDetail {
  id: number
  qty: string
  productPrice: number
  totalPrice: number
  mark: string
  productName: string
  productPhoto: string
  productId: number
}