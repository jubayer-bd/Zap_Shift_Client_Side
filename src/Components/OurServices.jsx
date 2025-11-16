import React from "react";
import img from "../assets/Others/service.png";
const OurServices = () => {
  const cards = [
    {
      title: "Express  & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      id: 2,
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
    {
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];
  return (
    <div className="bg-[#03373D] p-20 rounded-2xl ">
      <h2 className="text-2xl font-bold  text-white text-center my-3">
        Our Services
      </h2>
      <p className="text-[#DADADA] text-center max-w-200 mx-auto">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className=" grid grid-cols-3 gap-5 mt-10 ">
        {cards.map((card) => (
          <div
            className={` ${
              card.id == 2 ? "bg-primary" : "bg-white"
            } p-5 py-10 rounded-2xl space-y-2 flex flex-col text-center items-center `}
          >
            <img src={img} alt="" />
            <h2 className="font-bold">{card.title}</h2>
            <p className="text-secondary text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
