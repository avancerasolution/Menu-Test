import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Contact = () => {
  return (
    <>
      <Header />

      <section className="contact">
        <form>
          <h2>Contact Us</h2>

          <input
            type="text"
            placeholder="Name"
            //   value={name}
            //   onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message..."
            cols="30"
            rows="10"
            //   value={message}
            //   onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send</button>
        </form>
        {/* <motion.div className='FormBorder'>
  <motion.div>

    <img src={Burger} alt='burger'></img>
  </motion.div>
   </motion.div>    */}
      </section>

      <Footer />
    </>
  );
};

export default Contact;
