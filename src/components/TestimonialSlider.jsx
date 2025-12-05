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
<<<<<<< HEAD
        "Professional, creative, and attentive throughout the process, he made everything smooth and effective. His service and communication are outstanding. Highly recommended.",
=======
        "Caleb is professional, creative, and attentive, making the process smooth and effective. His service and communication are outstanding. Highly recommended.",
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
    },
    {
      name: "William Orhin",
      title: "CEO, Stunning Concepts",
      comment:
<<<<<<< HEAD
        "A talented graphic designer, he brought our vision to life with excellent communication and an amazing final product.",
=======
        "Caleb is professional, creative, and attentive, making the process smooth and effective. His service and communication are outstanding. Highly recommended.",
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
    },
    {
      name: "Adaugo Modilim",
      title: "Founder, The Godly Nation",
      comment:
<<<<<<< HEAD
        "He created a beautiful logo for our brand that perfectly captures our essence. His design skills are top-notch, and we're thrilled with the result!",
=======
        "Caleb is professional, creative, and attentive, making the process smooth and effective. His service and communication are outstanding. Highly recommended.",
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
    },
    {
      name: "Makafui Bedzra",
      title: "CEO, Cynosol Labs",
      comment:
<<<<<<< HEAD
        "A creative problem-solver with a keen eye for design, he consistently delivers impressive work. I look forward to working with him again in the future.",
=======
        "Caleb is professional, creative, and attentive, making the process smooth and effective. His service and communication are outstanding. Highly recommended.",
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
    },
    {
      name: "Japheth Selorm",
      title: "Co-founder, DomiTech",
      comment:
<<<<<<< HEAD
        "A true professional with genuine passion for his craft. I highly recommend him for any web development or graphic design project.",
=======
        "Caleb is professional, creative, and attentive, making the process smooth and effective. His service and communication are outstanding. Highly recommended.",
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
    },
    {
      name: "Vanett Lamptey",
      title: "Satisfied Customer",
      comment:
<<<<<<< HEAD
        "Working with him was a pleasure. He listened to our needs, offered valuable suggestions, and delivered high-quality work on time.",
=======
        "Caleb is professional, creative, and attentive, making the process smooth and effective. His service and communication are outstanding. Highly recommended.",
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
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
