import Header from "./components/Header/Header";
import Login from "./components/Login";
import LastMovements from "./components/LastMovements/LastMovements";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
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
    <div c>
      <Header movements={movements} />
      <LastMovements movements={movements} />
    </div>
  );
}

export default App;
