import React from "react";
import { TiHome } from "react-icons/ti";
<<<<<<< HEAD
import { FaEnvelope, FaFileDownload } from "react-icons/fa";
import CVUrl from "../../public/Caleb Nii Lantei Lamptey.pdf";
import { delay, motion } from "motion/react";
=======
import { FaFileDownload } from "react-icons/fa";
import CVUrl from "../../public/Caleb Nii Lantei Lamptey.pdf";
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400

const HeroSection = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center w-full md:w-9/10 text-white mb-6"
    >
      <div className="flex items-center justify-center bg-button w-fit rounded-full p-3">
        <TiHome className="text-button-text size-5" />
      </div>
<<<<<<< HEAD
      <div className="w-full h-fit sm:h-[60vh] my-5 sm:mt-0 flex flex-col">
        <motion.div
          className=""
          initial={{ filter: "blur(10px)", translateY: 20, opacity: 0 }}
          animate={{ filter: "none", translateY: 0, opacity: 100 }}
          transition={{ duration: 1.2 }}
        >
          <p className="text-lg sm:text-xl mb-2 flex sm:justify-center mt-20">
            Hi there, I'm
          </p>
          <p className="font-extrabold text-3xl sm:text-6xl mb-2 flex sm:justify-center">
            Caleb Lamptey
          </p>
        </motion.div>

        {/* <p className="text-md leading-7 mb-4 flex sm:justify-center z-500">
=======
      <div className="w-full h-fit sm:h-[70vh] mt-5 sm:mt-0 flex flex-col justify-center">
        <p className="text-lg sm:text-2xl mb-2 flex sm:justify-center">
          Hi there, I'm
        </p>
        <p className="font-extrabold text-3xl sm:text-6xl mb-2 flex sm:justify-center">
          Caleb Lamptey
        </p>
        <p className="text-md leading-7 mb-8 flex sm:justify-center z-500">
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
          ...and I'm a lover of
          <span className="duration-300 font-mono text-sm flex items-center mx-2 font-bold">
            tech
          </span>
          and
          <span className="duration-300 font-cursive flex items-center mx-2 text-2xl leading-5  ">
            design.
          </span>
<<<<<<< HEAD
        </p> */}
        <div className="flex flex-col sm:items-center w-full">
          <motion.div
            initial={{ filter: "blur(10px)", translateY: 20, opacity: 0 }}
            animate={{ filter: "none", translateY: 0, opacity: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full sm:w-4/5 font-light text-xs sm:text-md text-white-2 text-justify sm:max-w-2xl sm:text-center leading-5 mb-4"
          >
            Welcome to my portfolio. Get to know about my personality, interests
            and general career path. Take a look around and don't hesitate to
            contact me if you see something you like. ;)
          </motion.div>
          <motion.div
            className="flex gap-2"
            initial={{ filter: "blur(10px)", translateY: 20, opacity: 0 }}
            animate={{ filter: "none", translateY: 0, opacity: 100 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a href={CVUrl} download={true} className="z-99">
              <div className="bg-button/50 border border-white/5 hover:bg-button/30 duration-300 cursor-pointer z-30 px-5 py-2 text-xs rounded-xl backdrop-blur-xs w-fit mt-3 flex items-center justify-center gap-2">
                <FaFileDownload />
                Download my CV
              </div>
            </a>
            <a href="mailto:calebniilantei@gmail.com" className="z-99">
              <div className="bg-white text-bg-1 hover:bg-white/60 duration-300 cursor-pointer z-30 px-5 py-2 text-xs rounded-xl backdrop-blur-xs w-fit mt-3 flex items-center justify-center gap-2">
                <FaEnvelope />
                Let's talk
              </div>
            </a>
          </motion.div>
        </div>
        <div className="flex w-full justify-center items-center">
          <motion.div
            initial={{ scale: 0.4 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 6,
              ease: [0, 0.71, 0.2, 1.01],
              delay: 1.8,
            }}
            className={`hidden md:block absolute h-40 w-50 md:h-140 md:w-200 bg-[#25d3ff] opacity-30 rounded-full -bottom-1/2 backdrop-blur-xl blur-3xl z-1`}
          ></motion.div>
=======
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
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
