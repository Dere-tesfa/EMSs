import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div className="nav__bar">
      <div>
        <h1>EMS Wellcome To Admin DashBoard</h1>
      </div>
      <Link to="/login">
        <button className="logout__btn">login</button>
      </Link>
    </div>
  );
};
