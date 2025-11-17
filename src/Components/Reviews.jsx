import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import quote from "../assets/Others/reviewQuote.png";
import user from "../assets/Others/image-upload-icon.png";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import img from "../assets/Others/customer-top.png";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <div className="  ">
      <div className="max-w-6xl mx-auto px-4">
        <figure className="flex justify-center mb-10 items-center">
          {" "}
          <img src={img} alt="" />
        </figure>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-5  text-gray-900 ">
          What our customers are sayings
        </h2>
        <p className="text-center text-secondary mb-12 max-w-200 mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            1024: { slidesPerView: 2.2 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-20"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white review-card transition-all duration-300 p-6 rounded-2xl shadow-lg border border-gray-200  h-full flex flex-col space-y-4 transform hover:-translate-y-2">
                {/* Quote and Rating */}
                <div className="flex justify-between items-center">
                  <img
                    src={quote}
                    className="w-10 h-10 text-primary"
                    alt="quote"
                  />
                  <span className="flex items-center gap-1 text-yellow-400 font-semibold">
                    {item.ratings} <FaStar />
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm md:text-base  font-medium leading-relaxed">
                  {item.review}
                </p>

                {/* Dotted Divider */}
                <div className="border-b border-dashed border-gray-300  my-2"></div>

                {/* User Info */}
                <div className="flex gap-3 items-center mt-auto">
                  <img
                    src={item.avatar || user}
                    alt={item.userName}
                    className="w-10 h-10 rounded-full flex-shrink-0 object-cover"
                  />
                  <div className="flex flex-col items-start justify-center gap-0">
                    <h3 className="text-sm md:text-base font-semibold ">
                      {item.userName}
                    </h3>
                    <p className="text-xs md:text-sm text-secondary">
                      {item.user_email}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
