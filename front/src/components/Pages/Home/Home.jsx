import React from "react";
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
        {store.user ? <LastMovements /> : <Login />}
      </div>
    </div>
  );
}

export default Home;
