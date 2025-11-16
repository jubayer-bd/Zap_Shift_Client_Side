import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import { FiArrowUpRight } from "react-icons/fi";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      title: (
        <>
          We Make Sure Your <br />
          <span className="text-primary-content">Parcel Arrives</span> On Time —
          No Fuss.
        </>
      ),
      description:
        "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.",
      leftImg: "/tiny-deliveryman.png",
      rightImg: "/big-deliveryman.png",
    },
    {
      id: 2,
      title: (
        <>
          Fastest <span className="text-primary-content">Delivery</span> &{" "}
          <span className="text-primary-content">Easy Pickup</span>
        </>
      ),
      description:
        "Track your parcel anytime, anywhere. Seamless experience for customers & riders.",
      leftImg: "/tiny-deliveryman.png",
      rightImg: "/big-deliveryman.png",
    },
    {
      id: 3,
      title: (
        <>
          We Deliver With{" "}
          <span className="text-primary-content">Care & Speed</span>
        </>
      ),
      description:
        "Our professional riders ensure safe delivery for every package.",
      leftImg: "/tiny-deliveryman.png",
      rightImg: "/big-deliveryman.png",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-10 rounded-4xl shadow-2xl p-20">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-0">
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-5"
              >
                <img
                  src={slide.leftImg}
                  alt="Left Illustration"
                  className="w-40 h-40 object-contain"
                />

                <h1 className="text-4xl md:text-5xl font-bold leading-tight ">
                  {slide.title}
                </h1>

                <p className="text-gray-500 max-w-md">{slide.description}</p>

                <div className="flex gap-4">
                  <div className="flex flex-row justify-center items-center gap-0.5">
                    <button className="btn bg-primary  rounded-full px-6">
                      Track Your Parcel
                    </button>
                    <button className="bg-secondary-content text-primary p-2 rounded-full">
                      <FiArrowUpRight />
                    </button>
                  </div>
                  <button className="btn bg-white border border-primary  rounded-full px-6">
                    Be A Rider
                  </button>
                </div>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <img
                  src={slide.rightImg}
                  className="w-[350px] md:w-[450px] object-contain"
                  alt="Hero Illustration"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
