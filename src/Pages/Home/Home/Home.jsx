import React from "react";
import HeroCarousel from "../../../Components/Banner/Banner";
import HowItWorks from "../../../Components/HowItWorks";
import OurServices from "../../../Components/OurServices";

const Home = () => {
  return (
    <div className="space-y-25">
      <HeroCarousel />
      <HowItWorks />
      <OurServices />
    </div>
  );
};

export default Home;
