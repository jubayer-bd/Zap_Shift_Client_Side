import React from "react";
import HeroCarousel from "../../../Components/Banner/Banner";
import HowItWorks from "../../../Components/HowItWorks";
import OurServices from "../../../Components/OurServices";
import Brand from "../../../Components/Brand";
import Reviews from "../../../Components/Reviews";
const reviewsPromise = fetch("/public/reviews.json").then((res) => res.json());
const Home = () => {
  return (
    <div className="space-y-25">
      <HeroCarousel />
      <HowItWorks />
      <OurServices />
      <Brand />
      <Reviews reviewsPromise={reviewsPromise} />
    </div>
  );
};

export default Home;
