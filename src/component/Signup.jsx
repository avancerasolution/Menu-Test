import React from "react";

const Signup = () => {
  return (
    <section className="contact login">
      <form>
        <h2>Sign Up </h2>
        <input
          type="text"
          placeholder="First Name"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
        />
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

export default Signup;
