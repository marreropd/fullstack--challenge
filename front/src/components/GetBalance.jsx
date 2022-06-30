import React from "react";
import { useSelector } from "react-redux";

function GetBalance() {
  const store = useSelector((state) => state);
  const movements = store.movements;

  const totalAmounts = [0];

  for (let i = 0; i < movements.length; i++) {
    if (movements[i].type === "Ingreso") {
      totalAmounts.push(movements[i].amount);
    } else {
      totalAmounts.push(movements[i].amount * -1);
    }
  }
  const result = totalAmounts.reduce((acc, amount) => acc + amount);

  return <p>$ {result && result}</p>;
}

export default GetBalance;
