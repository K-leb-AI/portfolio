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
      {/* <TabGroup className="w-full flex items-center flex-col">
        <TabList className="flex gap-6 w-fit bg-bg-2 rounded-full px-4 py-2">
          <Tab className="flex items-center decoration-0 justify-center gap-2 data-selected:opacity-100 opacity-50">
            <FaCode />
            <p className="text-sm">Dev Projects</p>
          </Tab>
          <Tab className="flex items-center justify-center gap-2 data-selected:opacity-100 opacity-50">
            <p className="text-sm">Design Projects</p>
            <SiMaterialdesignicons />
          </Tab>
        </TabList>
        <br />
        <TabPanels>
          <TabPanel className="">
            <DevTab />
          </TabPanel>
          <TabPanel>
            <DesignTab />
          </TabPanel>
        </TabPanels>
      </TabGroup> */}

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

      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <div className="flex justify-center items-center gap-2 py-2 px-5 bg-button text-button-text hover:text-bg-1 hover:bg-white rounded-full duration-300 text-sm mt-4">
          See some more
          <FaArrowRight />
        </div>
      </a>
    </div>
  );
};

export default ProjectSection;
