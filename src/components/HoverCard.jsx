import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-full w-full rounded-xl bg-bg-2"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid rounded-xl bg-bg-3 shadow-lg p-8"
      >
        <div className="font-mono text-sm leading-relaxed">
          <div className="text-gray-400">
            <span className="text-green-600">const</span>{" "}
            <span className="text-white">profile</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-yellow-500">{"{"}</span>
          </div>

          <div className="ml-4 mt-2">
            {/* Name */}
            <div className="text-gray-400">
              <span className="text-white">name</span>
              <span className="text-white">:</span>{" "}
              <span className="text-accent">"Caleb"</span>
              <span className="text-accent">,</span>
            </div>

            {/* Title */}
            <div className="text-gray-400 mt-3">
              <span className="text-white">title</span>
              <span className="text-white">:</span>{" "}
              <span className="text-yellow-500">[</span>
            </div>
            <div className="ml-4 mt-1">
              <div className="text-accent">
                "Full-stack Developer"<span className="text-white">,</span>
              </div>
              <div className="text-accent">
                "Graphic Designer"<span className="text-white">,</span>
              </div>
              <div className="text-accent">
                "UI/UX Developer"<span className="text-white">,</span>
              </div>
              <div className="text-accent">
                "Research Assistant"<span className="text-white">,</span>
              </div>
              <div className="text-accent">"ML Programmer"</div>
            </div>
            <div className="text-accent">
              ]<span className="text-white">,</span>
            </div>

            {/* Interests */}
            <div className="text-gray-400 mt-3">
              <span className="text-white">interests</span>
              <span className="text-white">:</span>{" "}
              <span className="text-yellow-500">[</span>
            </div>
            <div className="ml-4 mt-1">
              <div className="text-accent">
                "Watching Animated Movies"<span className="text-accent">,</span>
              </div>
              <div className="text-accent">
                "Catching up with Tech updates"
                <span className="text-accent">,</span>
              </div>
              <div className="text-accent">
                "Reading Christian & Fictional Literature"
              </div>
            </div>
            <div className="text-yellow-500">
              ]<span className="text-accent">,</span>
            </div>

            {/* Years of Experience */}
            <div className="text-gray-400 mt-3">
              <span className="text-white">yearsOfExperience</span>
              <span className="text-white">:</span>{" "}
              <span className="text-accent">3</span>
            </div>
          </div>

          <div className="text-yellow-500 mt-2">
            {"}"}
            <span className="text-white">;</span>
          </div>

          {/* Blinking cursor */}
          <div className="inline-block w-2 h-5 bg-white animate-pulse mt-2"></div>
        </div>{" "}
      </div>
    </motion.div>
  );
};

export default TiltCard;
