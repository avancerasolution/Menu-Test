import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <img src={logo} alt="" />
        </div>

        <div>
          <Link to="/about">
            <p>About Us</p>
          </Link>
          <Link to="/contact">
            <p>Contact Us</p>
          </Link>
          <Link to="/policy">
            <p>Policy</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
