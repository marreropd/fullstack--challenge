import React from "react";
import styles from "./ActionBotton.css";
function ActionBotton() {
  return (
    <div className="button">
      <span className="icon">
        <i className="bi bi-box-arrow-in-up-left"></i>
      </span>
      <span className="text">Añadir nuevo movimiento</span>
    </div>
  );
}

export default ActionBotton;
