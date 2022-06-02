import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [loginCreds, setLoginCreds] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <div>
      Login
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          onChange={handleOnChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleOnChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
