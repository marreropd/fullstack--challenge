import Header from "./components/Header/Header";
import Login from "./components/Login";
import LastMovements from "./components/LastMovements/LastMovements";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import CreateMovement from "./components/CreateMovement/CreateMovement";
import ActionBotton from "./components/ActionBotton/ActionBotton";
import AddMovement from "./components/AddMovement/AddMovement";

function App() {
  const [movements, setMovements] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
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
      <div show={modalShow} onClick={() => setModalShow(true)}>
        <ActionBotton />
      </div>
      <LastMovements movements={movements} />
      <AddMovement show={modalShow} onHide={() => setModalShow(false)} />
      <CreateMovement show={show} handleClose={handleClose} />
    </div>
  );
}

export default App;
