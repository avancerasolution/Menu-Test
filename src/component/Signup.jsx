import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../Redux/action/signup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  clearUserError,
  clearUserMessage,
} from "../Redux/reducer/signUpReducer";
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [confirmPassword, setConfirmPassword] = useState();
  const { message, error } = useSelector((state) => state.signup);

  const [data, setdata] = useState({
    first_name: "",
    last_name: "",
    main_email: "",
    password: "",
  });

  const handlechange = (event) => {
    setdata({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const submit = async (event) => {
    event.preventDefault();

    const emailregex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailregex.test(data.main_email)) {
      toast.error("Invalid Email Address");
    }else if (data.password.length <= 7){

      toast.error("Password is must Be greater then 8 characters");
      
    }
    
    else if (confirmPassword !== data.password) {
      toast.error("Password and Confirm Password is Not Matched");
    } else {
      await dispatch(signup(data));
    }
  };
  useEffect(() => {
    if (message) {
      toast.success(message);

      dispatch(clearUserMessage());
      navigate("/login");
    }
    if (error) {
      toast.error(error);

      dispatch(clearUserError());
    }
  }, [dispatch, error, message, navigate]);


  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <section className="contact login">
      <div className="container-fluid abt">
        <div className="row">
          <div className="col-sm-12">
            <h2>Sign Up </h2>
          </div>
        </div>
      </div>

      <div className="container loginform">
        <div className="row">
          <div className="col-sm-6">
            <form>
              <h2>Sign Up </h2>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={handlechange}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={handlechange}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={handlechange}
                name="main_email"
              />

              <input
                type="password"
                placeholder="Password"
                onChange={handlechange}
                name="password"
              />
              <input
                value={confirmPassword}
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                name="password"
              />

              <button type="submit" onClick={submit}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
