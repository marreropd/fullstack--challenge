import React from "react";
import styles from "./Header.css";

function Header({ movements }) {
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
        <div className="d-flex flex-column mt-5">
          <h4 className="text-white text-end">Balance: $1254245</h4>
          <h5 className="text-end text-white">Ultimos Movimientos:</h5>
        </div>
      </div>
    </div>
  );
}

export default Header;
