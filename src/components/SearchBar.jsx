import React from "react";

export function SearchBar() {
  return (
    <li className="nav-item">
      <div className="card">
        <form action="" className="">
          <input
            className="search"
            type="text"
            placeholder="Que estas buscando..."
          />
          <button className="btn btn-secondary">Buscar</button>
        </form>
      </div>
    </li>
  );
}
