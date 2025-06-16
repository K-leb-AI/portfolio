import React from "react";
import { TiHome } from "react-icons/ti";
import { FaFileDownload } from "react-icons/fa";
import CVUrl from "../../public/Caleb Nii Lantei Lamptey.pdf";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center w-full md:w-9/10 text-white mb-6"
    >
      <div className="flex items-center justify-center bg-button w-fit rounded-full p-3">
        <TiHome className="text-button-text size-5" />
      </div>
      <div className="w-full h-fit sm:h-[70vh] mt-5 sm:mt-0 flex flex-col justify-center">
        <p className="text-lg sm:text-2xl mb-2 flex sm:justify-center">
          Hi there, I'm
        </p>
        <p className="font-extrabold text-3xl sm:text-6xl mb-2 flex sm:justify-center">
          Caleb Lamptey
        </p>
        <p className="text-md leading-7 mb-8 flex sm:justify-center z-500">
          ...and I'm a lover of
          <span className="duration-300 font-mono text-sm flex items-center mx-2 font-bold">
            tech
          </span>
          and
          <span className="duration-300 font-cursive flex items-center mx-2 text-2xl leading-5">
            design.
          </span>
        </p>
        <div className="flex flex-col sm:items-center w-full">
          <p className="font-mono w-full font-light text-sm sm:text-md text-white-2 text-justify sm:max-w-2xl sm:text-center leading-6">
            Welcome to my portfolio; the statement of my personality, interests
            and general career path. Take a look around and don't hesitate to
            contact me if you see something you like. ;)
          </p>
          <a href={CVUrl} download={true} className="z-99">
            <div className="bg-button/50 hover:bg-white hover:text-bg-1 duration-300 cursor-pointer z-30 px-5 py-2 text-sm rounded-full backdrop-blur-xs w-fit mt-3 flex items-center justify-center gap-2">
              <FaFileDownload />
              Download my CV
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
