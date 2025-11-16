import React from "react";
import Marquee from "react-fast-marquee";

import amazon from "../assets/brands/amazon.png";
import casio from "../assets/brands/casio.png";
import moonstar from "../assets/brands/moonstar.png";
import randstad from "../assets/brands/randstad.png";
import star from "../assets/brands/star.png";
import start_people from "../assets/brands/start_people.png";

const Brand = () => {
  return (
    <div>
      <h2 className="text-2xl text-center font-bold">
        We've helped thousands of sales teams
      </h2>

      <Marquee
        speed={50}
        pauseOnHover={true}
        autoFill={true}
        gradientColor="white"
      >
        <div className="flex items-center gap-20 py-10 px-20">
          <img src={casio} />
          <img src={amazon} />
          <img src={moonstar} />
          <img src={star} />
          <img src={start_people} />
          <img src={randstad} />
        </div>
      </Marquee>
    </div>
  );
};

export default Brand;
