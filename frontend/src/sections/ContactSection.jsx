import React from "react";
import { FaPhone } from "react-icons/fa";
import { RevealLinks } from "../components/FlipLink";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center w-full md:w-9/10 text-white pt-6 mt-20 z-10 relative"
    >
      <div className="flex items-center justify-center bg-button w-fit rounded-full p-3 mb-10">
        <FaPhone className="text-button-text size-5" />
      </div>
      <RevealLinks />
    </div>
  );
};

export default ContactSection;
