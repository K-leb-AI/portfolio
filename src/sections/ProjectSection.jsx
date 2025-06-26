import React from "react";
import { FaCube } from "react-icons/fa";
import Blob from "../components/LeftBlob";
import { FaArrowRight } from "react-icons/fa";
import DevTab from "../components/DevTab";
import DesignTab from "../components/DesignTab";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { useState } from "react";

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      id="projects"
      className="flex flex-col items-center w-full md:w-9/10 text-white py-6 mt-20 z-10 relative"
    >
      <Blob left="0" />
      <div className="flex items-center justify-center bg-button w-fit rounded-full p-3 mb-10">
        <FaCube className="text-button-text size-5" />
      </div>

      <p className="font-bold text-3xl text-center mb-4">
        i've been a bit busy
      </p>
      <p className="font-light text-center text-white-2 text-sm w-full lg:w-2/3 leading-6 font-mono mb-10">
        I love to work with the skills I develop. No skill is wasted on
        inactivity. Check out some of my coding and design projects here.
      </p>

      <div className="w-full flex items-center flex-col">
        <div className="flex items-center gap-1 w-fit bg-bg-2 rounded-full px-5 py-2 duration-300">
          <button
            onClick={() => setActiveTab(0)}
            className={`flex items-center gap-2 cursor-pointer rounded-full h-fit transition-opacity ${
              activeTab === 0 ? "opacity-100" : "opacity-20"
            }`}
          >
            <FaCode />
            <p
              className={`text-sm transition-all leading-1 ${
                activeTab == 1 ? "text-xs" : ""
              }`}
            >
              Dev Projects
            </p>
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`flex items-center gap-2 px-3 py-2 cursor-pointer rounded-full transition-opacity ${
              activeTab === 1 ? "opacity-100" : "opacity-20"
            }`}
          >
            <p
              className={`text-sm transition-all leading-1 ${
                activeTab == 0 ? "text-xs" : ""
              }`}
            >
              Design Projects
            </p>
            <SiMaterialdesignicons />
          </button>
        </div>
        <div className="mt-6">
          {activeTab === 0 && <DevTab />}
          {activeTab === 1 && <DesignTab />}
        </div>
      </div>

      {/* <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <div className="flex justify-center items-center gap-2 py-2 px-5 bg-button text-button-text hover:text-bg-1 hover:bg-white rounded-full duration-300 text-sm mt-4">
          See some more
          <FaArrowRight />
        </div>
      </a> */}
    </div>
  );
};

export default ProjectSection;
