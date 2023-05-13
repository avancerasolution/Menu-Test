import React from "react";
import aboutimg from "../assets/about1.jpeg";

function About() {
  return (
    <div className="container about">
      <div className="row">
        <div className="col-sm-6">
          <img src={aboutimg} alt="Burger Logo" />
        </div>
        <div className="col-sm-6">
          <h1>About Us</h1>
          <p>
            We are a burger joint dedicated to serving the best burgers in town.
            Our juicy, flavorful burgers are made with only the freshest
            ingredients, and our buns are baked fresh every day. We offer a
            variety of toppings and sauces to choose from, so you can customize
            your burger just the way you like it.
          </p>
          <p>
            Our mission is to provide our customers with the ultimate burger
            experience. We believe that every burger should be made with love
            and care, and that's exactly what we do. We take pride in our work,
            and we're always striving to improve and innovate.
          </p>
          <p>
            So come on down and give us a try. We promise you won't be
            disappointed!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
