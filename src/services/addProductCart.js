import React from "react";

export async function addProductCart(product) {
  const cart = localStorage.getItem("cart");
  const token = localStorage.getItem("token");
  const resCartProduct = await fetch(`http://localhost:8000/product-details/`, {
    method: "post",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      cart,
      qty: 1,
      product,
    }),
  });
}
