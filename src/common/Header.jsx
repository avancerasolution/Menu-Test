import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { RiAccountBoxFill } from "react-icons/ri";
const Header = ({ orderCount, isAuthenticated }) => {
  console.log(isAuthenticated, "okoko");
  return (
    <header>
      <nav>
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
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
          <div className="headerIcons">
            <p>
              <span> {orderCount} </span>
              <AiOutlineShoppingCart />
            </p>

            <Link to="/login">
              <p>
                <AiOutlineLogin />
              </p>
            </Link>
            <Link to="/signup">
              <p>
                <RiAccountBoxFill />
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
