import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { contact } from "../Redux/action/contact";
import { useNavigate } from "react-router-dom";
import Loaction from "../assets/map.png";
import {
  clearContactError,
  clearContactMessage,
} from "../Redux/reducer/contactReducer";

const Contact = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { messages, error } = useSelector((state) => state.contact);

  const [data, setData] = useState({
    email: "",
    message: "",
    subject: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const submit = (event) => {
    event.preventDefault();

    dispatch(contact(data));
  };

  useEffect(() => {
    if (messages) {
      toast.success(messages);

      dispatch(clearContactMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearContactError());
    }
  }, [dispatch, error, messages, navigate]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <form>
                <h2>Contact Us</h2>
                <input
                  type="text"
                  placeholder="Subject"
                  value={data.subject}
                  name="subject"
                  required
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={data.email}
                  name="email"
                  onChange={handleChange}
                  required
                />
                <textarea
                  placeholder="Message..."
                  cols="30"
                  rows="10"
                  name="message"
                  value={data.message}
                  required
                  onChange={handleChange}
                ></textarea>
                <button type="submit" onClick={submit}>
                  Submit
                </button>
              </form>
            </div>

            <div className="col-sm-6 maps">
              <img src={Loaction} alt="map" width={100} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
