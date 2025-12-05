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
        "Professional, creative, and attentive throughout the process, he made everything smooth and effective. His service and communication are outstanding. Highly recommended.",
    },
    {
      name: "William Orhin",
      title: "CEO, Stunning Concepts",
      comment:
        "A talented graphic designer, he brought our vision to life with excellent communication and an amazing final product.",
    },
    {
      name: "Adaugo Modilim",
      title: "Founder, The Godly Nation",
      comment:
        "He created a beautiful logo for our brand that perfectly captures our essence. His design skills are top-notch, and we're thrilled with the result!",
    },
    {
      name: "Makafui Bedzra",
      title: "CEO, Cynosol Labs",
      comment:
        "A creative problem-solver with a keen eye for design, he consistently delivers impressive work. I look forward to working with him again in the future.",
    },
    {
      name: "Japheth Selorm",
      title: "Co-founder, DomiTech",
      comment:
        "A true professional with genuine passion for his craft. I highly recommend him for any web development or graphic design project.",
    },
    {
      name: "Vanett Lamptey",
      title: "Satisfied Customer",
      comment:
        "Working with him was a pleasure. He listened to our needs, offered valuable suggestions, and delivered high-quality work on time.",
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
