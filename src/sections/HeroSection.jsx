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
        <p className="text-lg sm:text-2xl mb-3">Hi there, I'm</p>
        <p className="font-extrabold text-3xl sm:text-6xl mb-6">
          Caleb Lamptey
        </p>
        <p className="font-mono sm:w-3/5 sm:min-w-md w-full leading-6 text-white-2 font-light text-sm sm:text-md text-justify">
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
  );
};

export default HeroSection;
