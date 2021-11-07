//customer
//--cart
// export * from "./customer/cart/getCartById"
export * from "./customer/cart/getProductsDetailByCart"
export * from "./customer/cart/addProductCart"
export * from "./customer/cart/addCartWithOrderDetail"
export * from "./customer/cart/updateProductDetail"
export * from "./customer/cart/deleteProductCart"
export * from "./customer/cart/downCart"

//public
//--home
export * from "./public/home/getLatestProducts"
export * from "./public/home/getPopularProducts"
export * from "./public/home/getCategories"
//--find
export * from "./public/find/getProduct"
export * from "./public/find/getProductsByCategory"
export * from "./public/find/getProductsBySmmt"
export * from "./public/find/getStore"
export * from "./public/find/searchProduct"
// export * from "./customer/find/getProductsByStore" //alrready in seller fx

export * from "./customer/cart/updateProductDetail"

//seller
export * from "./seller/getProductsByStore"
export * from "./seller/addProduct"
export * from "./seller/updateProduct"
export * from "./seller/deleteProduct"

//auth
export * from "./auth/signUp"
export * from "./auth/singIn"
export * from "./auth/logOutfx"
export * from "./auth/login"
export * from "./auth/sendMailConfirmation"

//utils
export * from "./utils/persistEntity"
export * from "./utils/persistEntityNT"
export * from "./utils/findByField"
export * from "./utils/uploadImage"

//profile
export * from "./customer/profile/getByField"
export * from "./customer/profile/getById"
