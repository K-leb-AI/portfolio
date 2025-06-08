import React from "react";
import ProjectCard from "../components/ProjectCard";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaReact, FaHtml5, FaNodeJs, FaArrowRight } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiArduino } from "react-icons/si";

import toast from "react-hot-toast";
import {
  SiMongodb,
  SiExpress,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import zustandIcon from "../assets/zustandIcon.svg";
const ZustandLogo = () => {
  return <img src={zustandIcon} alt="Zustand" className="w-5 h-5" />;
};
const portfolioNotify = () => {
  console.log("red");
  toast("You're already here. Made you click! 😂");
};

const bookwormNotify = () => {
  toast("Still working on this one.");
};

const DevTab = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 w-full">
      <div className="flex flex-col justify-end w-full aspect-square bg-bg-1/30 backdrop-blur-xs border border-border p-5">
        <div className="size-14 rounded-full bg-white flex items-center justify-center mb-5">
          {<FaArrowRight className="text-bg-1" />}
        </div>
        <p className="text-2xl xl:text-5xl leading-6 xl:leading-10 font-bold mb-4">
          check out some of my projects.
        </p>
        <p className="text-md font-extralight font-mono">
          I promise, they don’t disappoint!
        </p>
      </div>
      <a href="https://chatty-pkxt.onrender.com/login" target="_blank">
        <ProjectCard
          title="chatty!"
          activeIndex="0"
          index="1"
          icon={<FaGithub className="text-button-text size-5" />}
          stack={[
            <SiMongodb className="text-button-text xl:size-4 size-3" />,
            <SiExpress className="text-button-text xl:size-4 size-3" />,
            <FaReact className="text-button-text xl:size-4 size-3" />,
            <FaNodeJs className="text-button-text xl:size-4 size-3" />,
            <RiTailwindCssFill className="text-button-text xl:size-4 size-3" />,
            <ZustandLogo className="text-button-text xl:size-4 size-2 bg-button-text" />,
          ]}
        />
      </a>
      <a href="https://uplist.onrender.com/login" target="_blank">
        <ProjectCard
          title="uplist"
          activeIndex="0"
          index="1"
          icon={<FaGithub className="text-button-text size-5" />}
          stack={[
            <SiMongodb className="text-button-text size-4" />,
            <SiExpress className="text-button-text size-4" />,
            <FaReact className="text-button-text size-4" />,
            <FaNodeJs className="text-button-text size-4" />,
            <RiTailwindCssFill className="text-button-text size-4" />,
            <CgFigma className="text-button-text size-4" />,
          ]}
        />
      </a>
      <a
        href="https://www.linkedin.com/posts/calebniilanteilamptey_tweek24-signlanguagetranslation-inclusivity-activity-7262088762132746240-Yh8w?utm_source=share&utm_medium=member_desktop&rcm=ACoAADX1dZQBSo6iJoR2yvvsHRzqsZ08CsD3X-4"
        target="_blank"
      >
        <ProjectCard
          title="signify"
          activeIndex="0"
          index="1"
          icon={<FaGithub className="text-button-text size-5" />}
          stack={[
            <SiMongodb className="text-button-text size-4" />,
            <SiExpress className="text-button-text size-4" />,
            <FaReact className="text-button-text size-4" />,
            <FaNodeJs className="text-button-text size-4" />,
            <RiTailwindCssFill className="text-button-text size-4" />,
            <CgFigma className="text-button-text size-4" />,
            <SiArduino className="text-button-text size-4" />,
          ]}
        />
      </a>
      <div onClick={bookwormNotify}>
        <ProjectCard
          title="bookworm"
          activeIndex="0"
          index="1"
          icon={<FaLinkedinIn className="text-button-text size-5" />}
          stack={[
            <SiMongodb className="text-button-text size-4" />,
            <SiExpress className="text-button-text size-4" />,
            <FaReact className="text-button-text size-4" />,
            <FaNodeJs className="text-button-text size-4" />,
            <ZustandLogo className="text-button-text size-4 bg-button-text" />,
            <RiTailwindCssFill className="text-button-text size-4" />,
          ]}
        />
      </div>
      <div onClick={portfolioNotify}>
        <ProjectCard
          title="my portfolio"
          activeIndex="0"
          index="1"
          icon={<FaGithub className="text-button-text size-5" />}
          stack={[
            <SiMongodb className="text-button-text size-4" />,
            <SiExpress className="text-button-text size-4" />,
            <FaReact className="text-button-text size-4" />,
            <FaNodeJs className="text-button-text size-4" />,
            <RiTailwindCssFill className="text-button-text size-4" />,
            <CgFigma className="text-button-text size-4" />,
          ]}
        />
      </div>
      <a href="https://foodieproject.tiiny.site" target="_blank">
        <ProjectCard
          title="foodie"
          activeIndex="0"
          index="1"
          icon={<FaGithub className="text-button-text size-5" />}
          stack={[
            <IoLogoJavascript className="text-button-text size-4" />,
            <FaHtml5 className="text-button-text size-4" />,
            <IoLogoCss3 className="text-button-text size-4" />,
          ]}
        />
      </a>
    </div>
  );
};

export default DevTab;
