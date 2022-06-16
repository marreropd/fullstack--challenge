import styles from "./Movements.css";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Movements() {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    getMovements();
  }, []);

  async function getMovements() {
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/movements`,
      });
      setMovements(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

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
                  <i class="bi bi-plus-circle-fill mx-2 fs-3"></i>
                ) : (
                  <i class="bi bi-dash-circle-fill mx-2 fs-3"></i>
                )}
                <div className="d-flex flex-column">
                  <span className="h3 mb-0">${movement.amount} </span>
                  <span className="mx-3">{movement.description}</span>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}

export default Movements;
