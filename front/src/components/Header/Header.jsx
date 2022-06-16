import React from "react";

function Header({ movements }) {
  return (
    <div className="bg-dark p-3 sticky-top">
      <div className="">
        <h2 className="text-white">Movimientos</h2>
        <h3 className="text-white">Balance</h3>
      </div>
    </div>
  );
}

export default Header;
