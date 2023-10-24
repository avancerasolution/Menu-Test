import React, { useEffect } from "react";
import "../style/common.css";
import Slider from "../common/Slider";
import Menu from "../common/Menu";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Slider />
      <Menu />
    </div>
  );
};

export default Home;
