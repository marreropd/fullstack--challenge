import axios from "axios";
import React from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import movementActions from "../../../redux/movementActions";
import Header from "../../Header/Header";
import LastMovements from "../../LastMovements/LastMovements";
import Login from "../../Login";

function Home() {
  return (
    <div>
      {" "}
      <div>
        <Header />
        {store.user ? "Cargando... " && <LastMovements /> : <Login />}
      </div>
    </div>
  );
}

export default Home;
