import React from "react";

const OurServices = () => {
  const cards = [
    {
      title: "Express  & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      title: "Cash on Home Delivery",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
  ];
  return (
    <div className="bg-secondary-content p-5 rounded-2xl">
      <h2 className="text-2xl font-bold  text-white text-center">
        Our Services
      </h2>
      <p className="text-secondary text-center">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className=" grid grid-cols-4 gap-5 mt-10 ">
        {cards.map((card) => (
          <div className="bg-white p-5 rounded-2xl space-y-2 items-center">
            <img src="/fi_9618754.png" alt="" />
            <h2 className="font-bold">{card.title}</h2>
            <p className="text-secondary text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
