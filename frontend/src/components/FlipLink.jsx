import React from "react";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

export const RevealLinks = () => {
  return (
    <section className="grid relative place-content-center gap-2 bg-bg-2 px-8 py-24 text-white w-screen h-screen">
      <FlipLink href="https://www.linkedin.com/in/calebniilanteilamptey">
        Linkedin
      </FlipLink>
      <FlipLink href="https://www.instagram.com/caleb_chosen/">
        Instagram
      </FlipLink>
      <FlipLink href="https://github.com/K-leb-AI">Github</FlipLink>
      <br />
      <div className="flex gap-3 flex-wrap">
        <div className="bg-button text-button-text flex justify-center items-center font-bold text-xs rounded-full w-fit gap-2 px-4 py-2">
          <FaPhone />
          +233 20 027 6015
        </div>
        <div className="bg-button text-button-text flex justify-center items-center font-bold text-xs rounded-full w-fit gap-2 px-4 py-2">
          <IoLocation />
          Adjiringanor, East Legon, Ghana
        </div>
        <div className="bg-button text-button-text flex justify-center items-center font-bold text-xs rounded-full w-fit gap-2 px-4 py-2">
          <IoMail />
          calebniilantei@gmail.com
        </div>
      </div>
      <div className="absolute left-0 flex w-full justify-center bottom-5 text-button-text">
        © 2025 Caleb Lamptey. All Rights Reserved
      </div>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
