import React from "react";
import SquishyCard from "./SquishyCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Naa Adjeley Anang-la",
      title: "CEO, Drokemy",
      comment:
        "Caleb is professional, creative, and attentive, making the process smooth and effective. His service and communication are outstanding. Highly recommended.",
    },
    {
      name: "William Orhin",
      title: "CEO, Stunning Concepts",
      comment:
        "Caleb is professional, creative, and attentive, making the process smooth and effective. His service and communication are outstanding. Highly recommended.",
    },
    {
      name: "Adaugo Modilim",
      title: "Founder, The Godly Nation",
      comment:
        "Caleb is professional, creative, and attentive, making the process smooth and effective. His service and communication are outstanding. Highly recommended.",
    },
    {
      name: "Makafui Bedra",
      title: "CEO, Cynosol Labs",
      comment:
        "Caleb is professional, creative, and attentive, making the process smooth and effective. His service and communication are outstanding. Highly recommended.",
    },
    {
      name: "Japheth Selorm",
      title: "Co-founder, DomiTech",
      comment:
        "Caleb is professional, creative, and attentive, making the process smooth and effective. His service and communication are outstanding. Highly recommended.",
    },
    {
      name: "Vanett Lamptey",
      title: "Satisfied Customer",
      comment:
        "Caleb is professional, creative, and attentive, making the process smooth and effective. His service and communication are outstanding. Highly recommended.",
    },
  ];
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      centeredSlides={false}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      modules={[Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        820: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1380: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      className="w-[105%] mySwiper"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide>
          <div className="grid my-4 place-items-center">
            <SquishyCard
              name={testimonial.name}
              title={testimonial.title}
              comment={testimonial.comment}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
