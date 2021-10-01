import React, { useEffect, useState } from "react";

export function HomeLastList() {
  const [lsproducts, setlsproducts] = useState([]);

  const fetchw = async () => {
    const lsres = await fetch(
      "http://localhost:8000/products?_sort=created_at:DESC"
    );
    const lsdata = await lsres.json();
    setlsproducts(lsdata);
    console.log("lsproducts", lsdata);
  };

  useEffect(() => {
    fetchw();
  }, []);

  const handleEdit = () => {
    console.log("palcarro");
  };
  return (
    <>
      <h2>Ultimos Productos</h2>
      <div className=" row ">
        {lsproducts.map((product) => (
          <div className="col-md-4 mt-2" key={product.id}>
            <div className="card card-body">
              <h3>{product.name}</h3>
              <h6 className="text-right">{product.mark}</h6>

              <div className="row justify-content-between">
                <span className="col-6">stock: {product.stock}</span>
                <p className="col-4 pl-0 price">
                  <span className="align-top currency">S/</span>
                  {product.price}
                </p>
              </div>

              <button
                onClick={() => handleEdit()}
                className="btn btn-block btn-info"
              >
                Añadir
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}