import React from "react";
import SquareButtons from "./SquareButtons";

const ProjectCard = (props) => {
  const handleClick = () => {};
  const handleStackClick = () => {};
  return (
    <div
      onClick={props.onClick}
      className={`group w-full overflow-clip flex relative flex-col aspect-square ${
        props.activeIndex == props.index ? "bg-bg-2" : "bg-bg-2/30"
      } hover:bg-bg-2 duration-1000 ease-in-out backdrop-blur-xs border border-border p-5 cursor-pointer`}
    >
<<<<<<< HEAD
      <div className="absolute top-0 left-0 font-extrabold text-9xl text-white/20 block z-0 -translate-y-16 blur-xl opacity-0 group-hover:opacity-20 group-hover:translate-y-0 duration-300 group-hover:blur-none leading-25">
=======
      <div className="absolute top-0 left-0 font-extrabold text-9xl text-white/20 block z-0 -translate-y-16 blur-xl opacity-0 group-hover:opacity-20 group-hover:translate-y-0 duration-300 group-hover:blur-none">
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
        {props.title}
      </div>

      <div className="absolute right-5 z-10">
        <SquareButtons icon={props.icon} clickEvent={handleClick} />
      </div>
      <div className="flex justify-end h-full flex-col">
        <p className="text-2xl xl:text-4xl font-bold text-white mb-5">
          {props.title}
        </p>
        {
<<<<<<< HEAD
          <div className="flex gap-1 flex-wrap">
=======
          <div className="flex gap-2 flex-wrap">
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
            {props.stack.map((item, index) => (
              <SquareButtons
                key={index}
                icon={item}
                clickEvent={handleStackClick}
              />
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default ProjectCard;
