import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import userActions from "../../redux/userActions";
import GetBalance from "../GetBalance";
import styles from "./Header.css";

function Header({ movements, getMovements, getMovementsByQuery }) {
  const user = useSelector((state) => state.user);
  const [title, SetTitle] = useState("Balance: ");

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(userActions.logOut());
  };

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
            {title} {user ? <GetBalance /> : 0}
          </h4>
        </div>
      </div>
      <div className="text-end container">
        {user ? (
          <Link
            to="/"
            className="text-end  ms-auto QuerysTitles"
            onClick={() => handleClick()}
          >
            Cerrar Sesión
          </Link>
        ) : (
          <Link to={"/"}>Usuario no Logeado</Link>
        )}
      </div>

      {user ? (
        <div className="d-flex ms-auto container">
          <Link to={"/last-movements"} className="text-end QuerysTitles">
            Ultimos Movimientos
          </Link>
          <Link to="/incomes" className="text-end mx-3 QuerysTitles">
            Ingresos
          </Link>
          <Link to="/outcomes" className="text-end  QuerysTitles">
            Egresos
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Header;
