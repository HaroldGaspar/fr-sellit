import React from "react";
import axios from "axios";

export function getProductsByStore(setProducts) {
  const store = localStorage.getItem("store");

  axios.get(`http://localhost:8000/products?store=${store}`).then((res) => {
    const data = res.data;
    setProducts([...data]);
    console.log(data);
  });
}
