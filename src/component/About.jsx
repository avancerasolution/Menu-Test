import React, { useEffect } from "react";
import aboutimg from "../assets/about1.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { fetchAbout } from "../Redux/action/about";
import { convert } from "html-to-text";

function About() {
  const dispatch = useDispatch();
  const { about, message, error } = useSelector((state) => state.about);

  useEffect(() => {
    dispatch(fetchAbout());
  }, [dispatch]);
  return (
    <div className="container about">
      <div className="row">
        <div className="col-sm-6">
          <img
            src={"http://154.12.253.133:5000/assets/" + about.image}
            alt="Image"
          />
        </div>
        <div className="col-sm-6">
          <h1>{about.heading}</h1>
          <p>{convert(about.details)}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
