import React, { useEffect } from "react";
import { Nav, TaskList, HomeList, HomeLastList } from "../components";
import { axios } from "axios";
import { useProducts } from "../state";

export function Home() {
  const { products, setProducts } = useProducts();
  useEffect(async () => {
    const resStore = await fetch(`http://localhost:8000/products`);
    const data = await resStore.json();

    setProducts(data);
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">Home</div>
        <HomeList products={products} setProducts={setProducts} />
        <HomeLastList />
      </div>
    </>
  );
}
