import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LeftBlob from "./components/LeftBlob";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ParticleRing from "./components/ParticleRing";
import ProjectSection from "./sections/ProjectSection";
import logo from "./assets/logo.png";
import darkLogo from "./assets/logo-dark.svg";
import TimelineSection from "./sections/TimelineSection";
import Testimonials from "./sections/Testimonials";
import ContactSection from "./sections/ContactSection";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const App = () => {
  particlesJS.load("particles-js", "particles.json", function () {
    console.log("callback - particles.js config loaded");
  });
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );
  const [logoUrl, setLogoUrl] = useState(darkLogo);
  const handleClick = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) setLogoUrl(logo);
    else setLogoUrl(darkLogo);
  };
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            color: "var(--bg-1)",
            background: "var(--white)",
          },
        }}
      />
      <div className="dark bg-bg-1 h-24 flex z-10 overflow-x-hidden">
        <div className="w-19/20 pt-2">
          <Navbar />
        </div>
        <Sidebar />
        <LeftBlob size="30" />
        <div className="absolute top-8 flex justify-center sm:justify-start sm:pl-30 w-full">
          <img
            src={isDark ? logo : darkLogo}
            alt=""
            className="w-4/30 min-w-30 h-full"
          />
        </div>

        <div
          className="fixed right-[26px] top-[21px] w-[45px] rounded-lg aspect-square flex z-100 items-center justify-center bg-button hover:bg-button-hover transition-all duration-200 cursor-pointer ease-in"
          onClick={handleClick}
        >
          {isDark ? (
            <LuMoon className="left-0 size-5 text-button-text" />
          ) : (
            <LuSun className="size-5 text-button-text left-0" />
          )}
        </div>

        <ParticleRing />
      </div>
      <div className="pl-10 pr-10 sm:pl-30 sm:pr-30 h-fit w-full bg-bg-1">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <TimelineSection />
        <Testimonials />
        <ContactSection />
      </div>
    </>
  );
};

export default App;
