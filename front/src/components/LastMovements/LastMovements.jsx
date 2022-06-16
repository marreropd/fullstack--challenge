import styles from "./LastMovements.css";
import React from "react";
import { format } from "date-fns";

function LastMovements({ movements }) {
  return (
    <div className="container">
      {movements &&
        movements.map((movement) => (
          <>
            <div
              className={
                movement.type === "Ingreso"
                  ? "shadow income p-3 my-1"
                  : "shadow outcome p-3 my-1"
              }
            >
              <div className="d-flex align-items-center">
                {movement.type === "Ingreso" ? (
                  <i class="bi bi-plus-circle-fill mx-3 fs-3"></i>
                ) : (
                  <i class="bi bi-dash-circle-fill mx-3 fs-3"></i>
                )}
                <div className="d-flex flex-column">
                  <span className="h3 mb-0">${movement.amount} </span>
                  <span className="">{movement.description}</span>
                </div>
                <span className="date ms-auto align-self-end">
                  {format(new Date(movement.createdAt), "yyyy/MM/dd kk:mm:ss")}
                </span>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}

export default LastMovements;
