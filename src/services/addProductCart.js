import React from "react";

export async function addProductCart(product) {
  const cart = localStorage.getItem("cart");
  const token = localStorage.getItem("token");

  //PROBLEMS WITH CORS?
  // fetch("http://hakhi.xyz/:8000/product-details/", {
  //   method: "post",
  //   headers: new Headers({
  //     "Access-Control-Allow-Origin": "*",
  //     Authorization: `Bearer ${token}`,
  //     "Content-Type": "application/json",
  //   }),
  //   body: JSON.stringify({
  //   cart,
  //   qty: 1,
  //   product,
  // }),
  // });

  fetch("http://hakhi.xyz:8000/product-details", {
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
