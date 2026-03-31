import React from "react";

const SquareButtons = (props) => {
  return (
    <div
      className="w-[40px] rounded-lg aspect-square flex items-center justify-center bg-button hover:bg-button-hover transition-all duration-200 cursor-pointer ease-in"
      onClick={props.clickEvent}
    >
      {props.icon}
    </div>
  );
};

export default SquareButtons;
