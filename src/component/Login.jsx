import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUser, login } from "../Redux/action/user";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { messages, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    await dispatch(login({ email, password }));
    dispatch(loadUser());
    navigate("/");
  };
  useEffect(() => {
    if (messages) {
      toast.success(messages);
      dispatch({ type: "clearMessage" });
      dispatch({ type: "emptyState" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, navigate, error, messages]);

  return (
    <section className="contact login">
      <Toaster />

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
              <input  type="email"  placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)}  />
              <input  type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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
