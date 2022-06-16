import React from "react";

function Login() {
  const sumbitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      console.log("los campos no pueden estar vacios");
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      console.log("debes escribir una direccion de correro valida");
      return;
    }

    if (email !== "challenge@pablo.org" || password !== "react") {
      console.log("credenciales invalidas");
      return;
    }

    console.log("OK, estamos listos para enviar la información");
  };
  return (
    <>
      <h2>Ingreso de ussuario</h2>
      <form onSubmit={sumbitHandler}>
        <label>
          <span>Correo Electronico</span>
          <br />
          <input type="text" name="email" />
        </label>
        <br />
        <label>
          <span>Contraseña</span>
          <br />
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Login;
