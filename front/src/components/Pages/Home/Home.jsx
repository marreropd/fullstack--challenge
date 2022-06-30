import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import movementActions from "../../../redux/movementActions";
import Header from "../../Header/Header";
import LastMovements from "../../LastMovements/LastMovements";

function Home() {
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
  async function getMovementsByQuery(query) {
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/movementsbyquery${query}`,
      });
      response.data && dispatch(movementActions.storeMovements(response.data));
    } catch (error) {
      console.log("Error: ", error);
    }
  }
  return (
    <div>
      {" "}
      <div>
        <Header />
        <LastMovements getMovements={getMovements} />
      </div>
    </div>
  );
}

export default Home;
