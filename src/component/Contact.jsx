import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { contact } from "../Redux/action/contact";
import { useNavigate } from "react-router-dom";

const Contact = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { messages, error } = useSelector((state) => state.contact);

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Subject ");
  const submit = async (event) => {
    event.preventDefault();
    if (isAuthenticated) {
      await dispatch(contact({ message, email, subject }));
      navigate("/");
    } else {
      toast.error("Please Login to Access This Resource");
    }
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
    <>
      <section className="contact">
        <Toaster />
        <form>
          <h2>Contact Us</h2>

          <input
            type="text"
            placeholder="Name"
            //   value={name}
            //   onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Message..."
            cols="30"
            rows="10"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" onClick={submit}>
            Submit
          </button>
        </form>
        {/* <motion.div className='FormBorder'>
  <motion.div>

    <img src={Burger} alt='burger'></img>
  </motion.div>
   </motion.div>    */}
      </section>
    </>
  );
};

export default Contact;
