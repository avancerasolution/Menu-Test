import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../Redux/action/signup";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { messages, error } = useSelector((state) => state.signup);

  const [first_name, setFirst_name] = useState("");
  const [last_name, seLast_name] = useState("");
  const [main_email, setMain_email] = useState("");
  const [password, setPassword] = useState("");
  const user_type = "customer";

  const submit = async (event) => {
    event.preventDefault();
    await dispatch(
      signup({ first_name, last_name, main_email, password, user_type })
    );
    navigate("/login");
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
  }, [dispatch, error, messages]);

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
          <Toaster />
      <form>
        <h2>Sign Up </h2>
        <input
          type="text"
          placeholder="First Name"
          value={first_name}
          onChange={(e) => setFirst_name(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={last_name}
          onChange={(e) => seLast_name(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={main_email}
          onChange={(e) => setMain_email(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={submit}>
          Sign Up
        </button>
      </form>
          </div>
        </div>
      </div>

      
      {/* <motion.div className='FormBorder'>
<motion.div>

<img src={Burger} alt='burger'></img>
</motion.div>
</motion.div>    */}
    </section>
  );
};

export default Signup;
