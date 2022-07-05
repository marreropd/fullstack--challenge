import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import Login from "../../Login";

function Incomes() {
  const store = useSelector((state) => state);
  const [inComes, setInComes] = useState([]);

  useEffect(() => {
    getMovementsByQuery();
  }, []);

  async function getMovementsByQuery() {
    try {
      const response = await axios({
        method: "GET",
        url: `https://api-piggy.vercel.app/movementsbyquery?type=Ingreso`,
        headers: { Authorization: `Bearer ${store.user.token}` },
      });
      response.data && setInComes(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return (
    <div>
      <Header />

      {store.user ? (
        inComes && (
          <div className="container">
            {inComes.map((movement, i) => (
              <div key={i + Math.random}>
                <div
                  className={
                    movement.type === "Ingreso"
                      ? "shadow income p-3 my-1"
                      : "shadow outcome p-3 my-1"
                  }
                >
                  <div className="d-flex align-items-center">
                    {movement.type === "Ingreso" ? (
                      <i className="bi bi-plus-circle-fill mx-3 fs-3"></i>
                    ) : (
                      <i className="bi bi-dash-circle-fill mx-3 fs-3"></i>
                    )}
                    <div className="d-flex flex-column">
                      <span className="h3 mb-0">${movement.amount} </span>
                      <span className="h5 mb-0">{movement.description}</span>
                      <span className="fs-6">
                        Categoria: {movement.category}{" "}
                      </span>
                    </div>

                    <span className="date ms-auto align-self-end">
                      <div className="ms-auto"></div>
                      {format(
                        new Date(movement.createdAt),
                        "yyyy/MM/dd kk:mm:ss"
                      )}
                      <span className="h6 ms-3">{movement.id} </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Incomes;
