import React from "react";
import { FaCommentAlt } from "react-icons/fa";
import TestimonialSlider from "../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="flex flex-col items-center w-full md:w-9/10 text-white py-6 mt-20 z-10 relative"
    >
      <div className="flex items-center justify-center bg-button w-fit rounded-full p-4 mb-10">
        <FaCommentAlt className="text-button-text size-4" />
      </div>
      <p className="font-bold text-3xl mb-4">
        what some people think about my work
      </p>
      <p className="font-extralight text-center text-white-2 text-sm w-full lg:w-2/3 leading-6 font-mono mb-10">
        I'm grateful to have worked with and for a number of people over the
        years and this is what they have to say about me.
      </p>
      <TestimonialSlider />
    </div>
  );
};

export default Testimonials;
