import axios from "axios";
import React from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import movementActions from "../../../redux/movementActions";
import Header from "../../Header/Header";
import LastMovements from "../../LastMovements/LastMovements";
import Login from "../../Login";

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
        url: `https://api-piggy.vercel.app/movements`,
        headers: { Authorization: `Bearer ${store.user.token}` },
      });
      (await response.data) &&
        dispatch(movementActions.storeMovements(response.data));
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return (
    <div>
      {" "}
      <div>
        <Header />
        {store.user ? <LastMovements getMovements={getMovements} /> : <Login />}
      </div>
    </div>
  );
}

export default Home;
