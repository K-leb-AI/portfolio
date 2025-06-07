import { motion } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";

const SquishyCard = (props) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 0.7,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative group h-96 w-65 shrink-0 overflow-hidden rounded-3xl p-8 bg-bg-2"
    >
      <div className="relative z-10 text-white w-full">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="w-20 aspect-square rounded-full bg-white"></div>
          <motion.span
            initial={{ scale: 0.85 }}
            variants={{
              hover: {
                scale: 1,
              },
            }}
            transition={{
              duration: 0.7,
              ease: "backInOut",
            }}
            className="my-2 block text-lg font-black text-center leading-[1.2]"
          >
            {props.name}
          </motion.span>
        </div>
        <p className="text-xs text-white-2 text-center"> {props.title}</p>
        <RiDoubleQuotesL className="absolute top-0 left-0 size-7" />
        <p className="italic text-sm mt-8 pl-3 border-l-2 border-white text-white-2">
          "{props.comment}"
        </p>
      </div>

      <Background />
      <div className="group-hover:opacity-45 opacity-0 duration-1300 ease-in-out absolute w-20 aspect-square bg-[#25d3ff] rounded-full -top-13 -left-13 backdrop-blur-xl blur-3xl"></div>
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="330"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0 cursor-pointer"
      variants={{
        hover: {
          scale: 1.2,
        },
      }}
      transition={{
        duration: 0.7,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 0.7,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="130"
        cy="114.5"
        r="101.5"
        fill={
          document.documentElement.classList.contains("dark")
            ? "#12161c"
            : "#f3f8ff97"
        }
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 0.7,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="130.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill={
          document.documentElement.classList.contains("dark")
            ? "#12161c"
            : "#f3f8ff97"
        }
      />
    </motion.svg>
  );
};

export default SquishyCard;
