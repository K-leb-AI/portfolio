import React from "react";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { useState } from "react";
import Tooltip from "./Tooltip";
import CVUrl from "../../public/Caleb Nii Lantei Lamptey.pdf";

import SquareButtons from "./SquareButtons";

const Sidebar = () => {
  return (
    <div className="h-screen w-24 bg-bg-2 py-5 fixed right-0 top-0 z-50 hidden md:block border-l-border border-l">
      <div />
      {/* Middle section - Social links */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-1">
        <a
          href="https://www.linkedin.com/in/calebniilanteilamptey"
          className="flex justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip
            tooltip="LinkedIn"
            component={
              <SquareButtons
                icon={<FaLinkedinIn className="size-3 text-button-text" />}
              />
            }
          />
        </a>

        <a
          href="https://www.instagram.com/caleb_chosen/"
          className="flex justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center">
            <Tooltip
              tooltip="Instagram"
              component={
                <SquareButtons
                  icon={<FaInstagram className="size-3 text-button-text" />}
                />
              }
            />
          </div>
        </a>
        <a
          href="https://github.com/K-leb-AI"
          className="flex justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center">
            <Tooltip
              tooltip="Github"
              component={
                <SquareButtons
                  icon={<FaGithub className="size-3 text-button-text" />}
                />
              }
            />
          </div>
        </a>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <Tooltip
          tooltip="Download CV"
          component={
            <a href={CVUrl} download={true}>
              <SquareButtons
                icon={<FaFileDownload className="size-3 text-button-text" />}
              />
            </a>
          }
        />
      </div>
    </div>
  );
};

export default Sidebar;
