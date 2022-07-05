import React from "react";
import Header from "../../Header/Header";
import LastMovements from "../../LastMovements/LastMovements";
import Login from "../../Login";

function Home() {
  return (
    <div>
      {" "}
      <div>
        <Header />
        {store.user ? <LastMovements /> : <Login />}
      </div>
    </div>
  );
}

export default Home;
