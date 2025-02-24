import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <Link to="/">
        <img src={Logo} alt="" className="logo" />
      </Link>
    </div>
  );
};

export default Header;
