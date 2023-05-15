import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="contact login">
      <form>
        <h2>Login </h2>

        <input
          type="email"
          placeholder="Email"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
        />
        <Link to="/signup">
          {" "}
          <p>Don`t Have An Account </p>{" "}
        </Link>

        <button type="submit">Submit</button>
      </form>
      {/* <motion.div className='FormBorder'>
<motion.div>

<img src={Burger} alt='burger'></img>
</motion.div>
</motion.div>    */}
    </section>
  );
};

export default Login;
