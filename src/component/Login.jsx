import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUser, login } from "../Redux/action/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { clearError, clearMessage } from "../Redux/reducer/userReducer";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const handlechange = (event) => {
    setdata({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const { message, error } = useSelector((state) => state.auth);

  const submit = async (event) => {
    event.preventDefault();
    await dispatch(login(data));
    dispatch(loadUser());
  };
  useEffect(() => {
    if (message) {
      dispatch(clearMessage());
      navigate("/");
      toast.success(message);
    }
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, navigate, error, message]);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);


  return (
    <section className="contact login">
      <div className="container-fluid abt">
        <div className="row">
          <div className="col-sm-12">
            <h2>Login </h2>
          </div>
        </div>
      </div>
      <div className="container loginform">
        <div className="row">
          <div className="col-sm-6">
            <h2>Login Now</h2>
            <form>
              <input
                type="email"
                placeholder="Email"
                value={data.email}
                name="email"
                onChange={handlechange}
              />
              <input
                type="password"
                placeholder="Password"
                value={data.password}
                name="password"
                onChange={handlechange}
              />
              <Link to="/signup">
                {" "}
                <p>Don`t Have An Account </p>{" "}
              </Link>

              <button type="submit" onClick={submit}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
