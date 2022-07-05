import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { render } from "react-dom";
import { useSelector, connect, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import movementActions from "../../redux/movementActions";
import Header from "../Header/Header";

function EditMovement(props) {
  const store = useSelector((state) => state);
  const [modalShow, setModalShow] = React.useState(false);
  const [dbData, setDbData] = React.useState([{}]);

  const dispatch = useDispatch();
  const movementId = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMovementById();
  }, [store.movements]);

  const [data, setData] = React.useState({
    amount: 0,
    decription: "",
    category: "",
  });

  async function getMovementById() {
    try {
      const response = await axios({
        method: "GET",
        url: `https://api-piggy.vercel.app/movements/${movementId.id}`,
        headers: { Authorization: `Bearer ${store.user.token}` },
      });
      (await response) && setDbData(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios({
        method: "PATCH",
        url: `http://localhost:3000/movements/${movementId.id}`,
        headers: { Authorization: `Bearer ${store.user.token}` },
        data: data,
      });
    } catch (error) {
      console.log("Error: ", error);
    }
    navigate("/");
  }

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Header />{" "}
      {dbData && (
        <div className="container shadow mt-3">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Descripción del Movimiento
              </label>
              <input
                defaultValue={dbData[0].description}
                type="text"
                className="form-control"
                id="description"
                name="description"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Concepto/Categoria del Movimiento
              </label>
              <input
                defaultValue={dbData[0].category}
                type="text"
                className="form-control"
                id="category"
                name="category"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Monto en $
              </label>
              <input
                defaultValue={dbData[0].amount}
                type="number"
                className="form-control"
                id="amount"
                name="amount"
                onChange={handleInputChange}
              />
            </div>
            <button className="btn button-submit  my-3" type="submit">
              Submit
            </button>
          </form>
          <div className="mb-3 py-3">
            <div className="shadow border p-3 p-2">
              <div className="d-flex align-items-center p-3">
                <div className="d-flex flex-column">
                  <span className="h3 mb-0">${data.amount} </span>
                  <span className="">{data.description}</span>
                  <span className="">categoria: {data.category}</span>
                </div>
                <div className="ms-auto px-5">
                  tipo: {dbData && dbData[0].type} ref:{" "}
                  {movementId && movementId.id}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditMovement;
