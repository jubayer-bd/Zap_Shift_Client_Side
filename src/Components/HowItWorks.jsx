// import { title } from "framer-motion/client";
// import { div } from "framer-motion/client";
import React from "react";

const HowItWorks = () => {
  const cards = [
    {
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold">How it Works</h3>
      <div className=" grid grid-cols-4 gap-5 mt-10 ">
        {cards.map((card) => (
          <div className="bg-white p-5 rounded-2xl space-y-2">
            <img src="/fi_9618754.png" alt="" />
            <h2 className="font-bold">{card.title}</h2>
            <p className="text-secondary text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
