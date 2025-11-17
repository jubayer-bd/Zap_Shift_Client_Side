import React from "react";
import HeroCarousel from "../../../Components/Banner/Banner";
import HowItWorks from "../../../Components/HowItWorks";
import OurServices from "../../../Components/OurServices";
import Brand from "../../../Components/Brand";
import Reviews from "../../../Components/Reviews";
import FAQAccordion from "../../../Components/FAQAccordion";
const reviewsPromise = fetch("/public/reviews.json").then((res) => res.json());
const Home = () => {
  return (
    <div className="space-y-25 mt-20">
      <HeroCarousel />
      <HowItWorks />
      <OurServices />
      <Brand />
      <Reviews reviewsPromise={reviewsPromise} />
      <FAQAccordion />
    </div>
  );
};

export default Home;
