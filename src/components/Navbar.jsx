import '../App.css';
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleOnClick = () => {
    if(isAuth) {
      logout();
    } else {
      navigate("/login")
    }
  }
  return (
    <div className="navbar">
      Navbar:
      <button onClick={handleOnClick}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
