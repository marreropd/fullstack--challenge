import React from "react";
import styles from "./Header.css";

function Header({ movements }) {
  return (
    <div className="bg-dark py-2 sticky-top">
      <div className="d-flex flex-column px-2">
        <i id="piggy-logo" class="bi bi-piggy-bank ms-5 mb-0"></i>
        <h2 id="title" className="mt-0">
          Piggy Safe
        </h2>
      </div>
      <div className="px-5 d-flex justify-content-evenly">
        <h4 className="h3 text-end text-white">Ultimos Movimientos:</h4>
        <h3 className="text-white text-end">Balance: $1254245</h3>
      </div>
    </div>
  );
}

export default Header;
