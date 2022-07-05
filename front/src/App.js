import React from "react";
import { Routes, Route } from "react-router-dom";
import Outcomes from "./components/Pages/OutComes/Outcomes";
import LastMovements from "./components/LastMovements/LastMovements";
import Home from "./components/Pages/Home/Home";
import Incomes from "./components/Pages/Incomes/Incomes";
import EditMovement from "./components/EditMovement/EditMovement";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/last-movements" element={<LastMovements />} />
        <Route path="/outcomes" element={<Outcomes />} />
        <Route path="/incomes" element={<Incomes />} />
        <Route path="/edit/:id" element={<EditMovement />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="container">
        <cite title="container">
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
    </div>
  );
}

export default App;
