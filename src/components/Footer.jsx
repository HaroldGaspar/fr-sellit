import React from "react";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <>
      <div className="col-10 mt-4 pt-4 mx-auto">
        <hr />
        <div className="d-flex justify-content-around ">
          <NavLink to="/about">Marca Gamarra </NavLink>
          <NavLink to="/contact">Equipo de desarrollo</NavLink>
          <NavLink to="/">Tienda Sellit</NavLink>
        </div>
      </div>
    </>
  );
}
