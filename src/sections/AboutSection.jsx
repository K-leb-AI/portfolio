import React from "react";
import { FaReact, FaJava, FaPython, FaNodeJs } from "react-icons/fa";
import { IoIosInformationCircle, IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiMongodb,
  SiExpress,
  SiAdobephotoshop,
  SiAdobeillustrator,
<<<<<<< HEAD
  SiSupabase,
=======
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
} from "react-icons/si";
import { GiSwordsEmblem } from "react-icons/gi";
import { CgFigma } from "react-icons/cg";
import zustandIcon from "../assets/zustandIcon-purple.svg";
import TiltCard from "../components/HoverCard";
import profile from "../assets/profile.jpg";
import RightBlob from "../components/RightBlob";

// Reusable badge component
const TechBadge = ({ icon, name, borderColor, bgColor, textColor }) => (
  <div
<<<<<<< HEAD
    className={`flex gap-1 px-3 py-2 border rounded-xl items-center text-xs
=======
    className={`flex gap-2 p-3 border rounded-lg items-center font-mono text-xs
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
      ${borderColor} ${bgColor} ${textColor}`}
  >
    {icon}
    {name}
  </div>
);

const AboutSection = () => {
  const techStack = [
    {
<<<<<<< HEAD
      icon: <FaReact className="size-3" />,
      name: "ReactJs",
      borderColor: "border-[#25d3ff]",
      bgColor: "bg-[#25d3ff]/20",
      textColor: "text-[#25d3ff]",
    },
    {
      icon: <RiNextjsFill className="size-3" />,
=======
      icon: <FaReact className="size-5" />,
      name: "ReactJs",
      borderColor: "border-[#25d3ff]",
      bgColor: "bg-[#25d3ff]/10",
      textColor: "text-[#25d3ff]",
    },
    {
      icon: <RiNextjsFill className="size-5" />,
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
      name: "NextJs",
      borderColor: "border-white",
      bgColor: "bg-white/10",
      textColor: "text-white",
    },
    {
      icon: <img src={zustandIcon} alt="Zustand" className="w-5 h-5" />,
      name: "Zustand",
      borderColor: "border-[#9842CE]",
      bgColor: "bg-[#9842CE]/10",
      textColor: "text-[#9842CE]",
    },
    {
<<<<<<< HEAD
      icon: <SiSupabase className="size-3" />,
      name: "Supabase",
      borderColor: "border-[#34B27B]",
      bgColor: "bg-[#34B27B]/10",
      textColor: "text-[#34B27B]",
    },
    {
      icon: <CgFigma className="size-3" />,
=======
      icon: <FaNodeJs className="size-5" />,
      name: "NodeJs",
      borderColor: "border-[#289B09]",
      bgColor: "bg-[#289B09]/10",
      textColor: "text-[#289B09]",
    },
    {
      icon: <CgFigma className="size-5" />,
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
      name: "Figma",
      borderColor: "border-[#F86E41]",
      bgColor: "bg-[#F86E41]/10",
      textColor: "text-[#F86E41]",
    },
    {
<<<<<<< HEAD
      icon: <SiMongodb className="size-3" />,
=======
      icon: <SiMongodb className="size-5" />,
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
      name: "MongoDB",
      borderColor: "border-[#005215]",
      bgColor: "bg-[#005215]/10",
      textColor: "text-[#24853C]",
    },
    {
<<<<<<< HEAD
      icon: <SiExpress className="size-3" />,
=======
      icon: <SiExpress className="size-5" />,
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
      name: "ExpressJs",
      borderColor: "border-white",
      bgColor: "bg-white/10",
      textColor: "text-white",
    },
    {
<<<<<<< HEAD
      icon: <IoLogoJavascript className="size-3" />,
=======
      icon: <IoLogoJavascript className="size-5" />,
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
      name: "JavaScript",
      borderColor: "border-[#FFCA1C]",
      bgColor: "bg-[#FFCA1C]/10",
      textColor: "text-[#FFCA1C]",
    },
    {
<<<<<<< HEAD
      icon: <RiTailwindCssFill className="size-3" />,
=======
      icon: <RiTailwindCssFill className="size-5" />,
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
      name: "TailwindCSS",
      borderColor: "border-[#25d3ff]",
      bgColor: "bg-[#25d3ff]/10",
      textColor: "text-[#25d3ff]",
    },
    {
<<<<<<< HEAD
      icon: <SiAdobephotoshop className="size-3" />,
=======
      icon: <SiAdobephotoshop className="size-5" />,
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
      name: "Adobe Photoshop",
      borderColor: "border-[#25D3FF]",
      bgColor: "bg-[#25D3FF]/10",
      textColor: "text-[#25D3FF]",
    },
    {
<<<<<<< HEAD
      icon: <SiAdobeillustrator className="size-3" />,
=======
      icon: <SiAdobeillustrator className="size-5" />,
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
      name: "Adobe Illustrator",
      borderColor: "border-[#FF9000]",
      bgColor: "bg-[#FF9000]/10",
      textColor: "text-[#FF9000]",
    },
    {
<<<<<<< HEAD
      icon: <FaPython className="size-3" />,
=======
      icon: <FaPython className="size-5" />,
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
      name: "Python",
      borderColor: "border-[#FFD400]",
      bgColor: "bg-[#FFD400]/10",
      textColor: "text-[#FFD400]",
    },
  ];

  return (
    <div
      id="about"
<<<<<<< HEAD
      className="flex flex-col items-center w-full md:w-9/10 text-white z-10 relative lg:p-1.5 rounded-3xl lg:bg-white/20 backdrop-blur-xs border-white/30 lg:border"
    >
      {/* <div className="flex items-center justify-center bg-button w-fit rounded-full p-3">
        <IoIosInformationCircle className="text-button-text size-3" />
      </div> */}

      <div className="w-full flex lg:flex-row flex-col justify-between lg:bg-bg-2 rounded-3xl lg:px-4 lg:py-3">
        <div className="w-full lg:w-19/40">
          <div className="flex w-full flex-col lg:flex-row justify-between pt-6">
            <div className="w-full lg:w-9/20 aspect-square border border-border bg-bg-2 rounded-2xl">
              <div
                className="w-full h-full bg-cover bg-center rounded-2xl"
                style={{ backgroundImage: `url(${profile})` }}
              />
            </div>
            <div className="w-full lg:w-1/2 py-3">
              <p className="font-bold text-3xl mb-3">about me</p>
              <p className="font-light text-justify text-white-2 text-sm leading-6">
=======
      className="flex flex-col items-center w-full md:w-9/10 text-white pb-6 z-10 relative"
    >
      <div className="flex items-center justify-center bg-button w-fit rounded-full p-3">
        <IoIosInformationCircle className="text-button-text size-5" />
      </div>
      <RightBlob right="0" />

      <div className="w-full py-5 flex lg:flex-row flex-col justify-between mt-10">
        <div className="w-full lg:w-19/40">
          <div className="flex w-full flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-9/20 aspect-square border border-border bg-bg-2 p-3">
              <div
                className="w-full h-full border border-border bg-cover bg-center"
                style={{ backgroundImage: `url(${profile})` }}
              />
            </div>
            <div className="w-full lg:w-1/2 py-3 md:p-3">
              <p className="font-bold text-3xl mb-3">who am i?</p>
              <p className="font-light text-justify text-white-2 text-sm leading-6 font-mono">
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
                {/* Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type. */}
                I’m a Christian first—I love Jesus with everything in me. I’m
                also passionate about technology and design. I enjoy thinking
                outside the box and crafting solutions others might overlook.
<<<<<<< HEAD
                I’ve grown deeply interested in autonomous robotics, and I hope
                to one day make a meaningful contribution to the growing
                knowledge and solutions in this exciting field!
=======
                I’ve grown deeply interested in artificial intelligence, and I
                hope to one day make a meaningful contribution to the growing
                knowledge in this exciting field!
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
              </p>
            </div>
          </div>

<<<<<<< HEAD
          <div className="flex flex-col items-center w-full">
            <div className="flex text-white gap-2 mt-5 mb-2 items-center">
              <GiSwordsEmblem className="size-3" />
              <span>my arsenal</span>
            </div>

            <div className="flex flex-wrap gap-1 justify-center">
=======
          <div className="flex flex-col items-center w-full mt-5">
            <div className="flex text-white gap-2 my-5 items-center">
              <GiSwordsEmblem className="size-5" />
              <span>my arsenal</span>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
              {techStack.map((tech, idx) => (
                <TechBadge key={idx} {...tech} />
              ))}
            </div>
          </div>
        </div>
        <br />
<<<<<<< HEAD
        <div className="hidden md:block w-full lg:w-[50%] aspect-3/10 sm:aspect-2/5 md:aspect-3/5 lg:aspect-auto max-h-[750px] rounded-lg overflow-hidden">
=======
        <div className="w-full lg:w-[50%] aspect-[3/10] sm:aspect-[2/5] md:aspect-[3/5] lg:aspect-auto max-h-[750px] rounded-lg overflow-hidden">
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
          <TiltCard />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
