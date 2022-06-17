import styles from "./LastMovements.css";
import React, { useState } from "react";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AddMovement from "../AddMovement/AddMovement";
import ActionBotton from "../ActionBotton/ActionBotton";

function LastMovements({ setMovements }) {
  const store = useSelector((state) => state);
  const movements = store.movements;
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      {movements && (
        <div className="container">
          {movements.map((movement, i) => (
            <div
              key={i + Math.random}
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
                  <span className="">{movement.description}</span>
                </div>
                <span className="date ms-auto align-self-end">
                  {format(new Date(movement.createdAt), "yyyy/MM/dd kk:mm:ss")}
                </span>
              </div>
            </div>
          ))}

          <div show={modalShow} onClick={() => setModalShow(true)}>
            <ActionBotton />
          </div>
          <AddMovement show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      )}{" "}
    </>
  );
}

export default LastMovements;
