import React from "react";
import About from "../About/About";
import Slider from "../Header/Slider/Slider";
import MemberShipDetails from "../MemberShip/MemberShipDetails";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div id="home">
      <Slider></Slider>
      <Services></Services>
      <MemberShipDetails></MemberShipDetails>
      <About></About>
    </div>
  );
};

export default Home;
