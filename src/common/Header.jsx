import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { RiAccountBoxFill } from "react-icons/ri";
import userImage from "../assets/user.png";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loadUser } from "../Redux/action/user";
import { logout } from "../Redux/action/signup";

const Header = ({ orderCount, isAuthenticated, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { messages, error } = useSelector((state) => state.signup);

  const handleLogout = async (event) => {
    event.preventDefault();
    await dispatch(logout());
    dispatch(loadUser());
    navigate("/");
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
                <img src={userImage} alt="" />
                <p>
                  {user.first_name} {user.last_name}
                </p>

                <span>
                  <IoMdArrowDropdownCircle />
                </span>
                <div class="dropdown-content">
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
