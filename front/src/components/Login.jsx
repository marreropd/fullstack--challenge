import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import userActions from "../redux/userActions";

function Login() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.token) {
      navigate("/");
    }
  });

  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    email: "email",
    password: "password",
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
<<<<<<< HEAD
<<<<<<< HEAD
  console.log(process.env.ApiURL);
=======

>>>>>>> parent of 63a8ad3 (adding process.env ApiUrl)
=======
  const url = `${process.env.ApiURL}/login`;
>>>>>>> parent of 4c67131 (update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
<<<<<<< HEAD
<<<<<<< HEAD
        url: `${process.env.ApiURL}/login`,
=======
        url: `https://api-piggy.vercel.app/login`,
>>>>>>> parent of 63a8ad3 (adding process.env ApiUrl)
=======
        url: url,
>>>>>>> parent of 4c67131 (update)
        data,
      });

      (await response) && dispatch(userActions.logIn(response.data));
    } catch (error) {
      console.log("Error: ", error);
    }
    e.preventDefault();
  };

  return (
    <div className="container p-5">
      <h2>Ingresar credenciales para ver movimientos</h2>
      <form className="row g-3" onSubmit={(e) => handleSubmit(e)}>
        <div className="col-auto">
          <label htmlFor="staticEmail2" className="mb-0">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-auto">
          <label htmlFor="inputPassword2" className="mb-0">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <button type="submit" className="btn text-white bg-dark mb-2">
            Confirmar identidad
          </button>
        </div>
      </form>
      <div>
        <h4>Usar credenciales de prueba:</h4>
        <p>email: admin@gmail.com</p>
        <p>password: 1234</p>
      </div>
    </div>
  );
}

export default Login;
