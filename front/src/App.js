import Header from "./components/Header/Header";
import Login from "./components/Login";
import LastMovements from "./components/LastMovements/LastMovements";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import CreateMovement from "./components/CreateMovement/CreateMovement";

function App() {
  const [movements, setMovements] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    getMovements();
  }, []);

  async function getMovements() {
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/movements`,
      });
      response.data && setMovements(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
  return (
    <div>
      <Header movements={movements} />
      <button onClick={handleShow}></button>
      <LastMovements movements={movements} />
      <CreateMovement show={show} handleClose={handleClose} />
    </div>
  );
}

export default App;
