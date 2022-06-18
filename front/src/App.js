import Header from "./components/Header/Header";
import LastMovements from "./components/LastMovements/LastMovements";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import movementActions from "./redux/movementActions";

function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getMovements();
  }, []);

  async function getMovements() {
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/movements`,
      });
      response.data && dispatch(movementActions.storeMovements(response.data));
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return (
    <div>
      <div>
        <Header />
        <LastMovements />
      </div>
      <cite title="">
        {" "}
        <a
          className="pinter text-dark"
          rel="noreferrer"
          href="https://www.linkedin.com/in/marrero-pablo/"
          target="_blank"
        >
          {" "}
          by Pablo Marrero
        </a>
      </cite>
    </div>
  );
}

export default App;
