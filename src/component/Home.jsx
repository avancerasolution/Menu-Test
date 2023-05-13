import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../style/common.css";
import Slider from "../common/Slider";
import Menu from "../common/Menu";

const Home = () => {
  return (
    <div>
      <Slider />
      <Menu />
    </div>
  );
};

export default Home;
