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
                  ? "shadow bg-success"
                  : "shadow bg-danger"
              }
            >
              <span>Monto: {movement.amount} </span>
              <span>descripcion: {movement.description}</span>
            </div>
          </>
        ))}
    </div>
  );
}

export default Movements;
