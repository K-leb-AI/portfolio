import React from "react";
import { MdOutlineTimeline } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import Timeline from "../components/Timeline";

const TimelineSection = () => {
  return (
    <div
      id="timeline"
      className="flex flex-col items-center w-full md:w-9/10 text-white py-6 mt-20 z-10 relative"
    >
      <div className="flex items-center justify-center bg-button w-fit rounded-full p-3 mb-10">
        <MdOutlineTimeline className="text-button-text size-5" />
      </div>

      <p className="font-bold text-3xl mb-4">it's been quite a journey</p>
      <p className="font-light text-center text-white-2 text-sm w-full lg:w-2/3 leading-6 font-mono mb-10">
        Here, you'll find what I've been up to in academia and in industry.
      </p>

      <Timeline />
    </div>
  );
};

export default TimelineSection;
