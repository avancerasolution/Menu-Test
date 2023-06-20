import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { RiAccountBoxFill } from "react-icons/ri";

import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loadUser } from "../Redux/action/user";
import { logout } from "../Redux/action/signup";

const Header = ({
  orderCount,
  isAuthenticated,
  user,

  setorderCount,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { messages, error } = useSelector((state) => state.signup);

  const handleLogout = async (event) => {
    event.preventDefault();
    await dispatch(logout());
    setorderCount(0);
    dispatch(loadUser());

    navigate("/");
  };
  const handleAuthenticated = () => {
    navigate("/login");
    toast("Please Login to access this resource");
  };

  useEffect(() => {
    if (messages) {
      toast.success(messages);
      dispatch({ type: "clearMessage" });
      dispatch({ type: "emptyState" });
      navigate("/");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, error, messages, navigate]);
  const items = JSON.parse(localStorage.getItem("items"));

  const totalValue = items?.reduce((sum, item) => sum + item.quantity, 0);
  setorderCount(totalValue);
  useEffect(() => {
    localStorage.setItem("totalValue", JSON.stringify(totalValue));
  }, [orderCount, totalValue]);
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
            {isAuthenticated ? (
              <Link to="/cartItem">
                {" "}
                <p>
                  <span> {orderCount} </span>
                  <AiOutlineShoppingCart />
                </p>
              </Link>
            ) : (
              <p onClick={handleAuthenticated}>
                <span> {totalValue} </span>
                <AiOutlineShoppingCart />
              </p>
            )}

            {!isAuthenticated ? (
              <>
                {" "}
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
              </>
            ) : (
              <div className="dropdown">
                <p>{user.first_name}</p>

                <span>
                  <IoMdArrowDropdownCircle />
                </span>

                <div class="dropdown-content">
                  <Link to="/myprofile">
                    <p>My Profile</p>
                  </Link>
                  <p onClick={handleLogout}>Logout</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
