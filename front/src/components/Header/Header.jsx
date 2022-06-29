import React, { useState } from "react";
import GetBalance from "../GetBalance";
import styles from "./Header.css";

function Header({ movements, getMovements, getMovementsByQuery }) {
  const [title, SetTitle] = useState("Balance: ");
  return (
    <div className="bg-dark py-2 sticky-top">
      <div className="container d-flex justify-content-between">
        <div className="d-flex flex-column">
          <i
            id="piggy-logo"
            className="bi bi-piggy-bank ms-5 mb-0 piggy-logo"
          ></i>
          <h2 id="title" className="mt-0">
            Piggy Safe
          </h2>
          <p className="piggy-logo">The best app to control your expenses</p>
        </div>
        <div className="d-flex flex-column mt-5 ms-auto">
          <h4 className="text-white text-end">
            {title} <GetBalance />
          </h4>
        </div>
      </div>
      <div className="d-flex ms-auto container">
        <h5
          className="text-end text-white pointer"
          onClick={() => {
            getMovementsByQuery("?type=Ingreso");
            SetTitle("Total de Ingresos: ");
          }}
        >
          Ingresos
        </h5>
        <h5
          className="text-end text-white mx-2 pointer"
          onClick={() => {
            getMovementsByQuery("?type=Egreso");
            SetTitle("Total de Egresos: ");
          }}
        >
          Egresos
        </h5>
        <h5
          className="text-end text-white pointer"
          onClick={() => {
            getMovements();
            SetTitle("Balance: ");
          }}
        >
          Ultimos Movimientos
        </h5>
      </div>
    </div>
  );
}

export default Header;
