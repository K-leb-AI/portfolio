import React from "react";

const SquareButtons = (props) => {
  return (
    <div
<<<<<<< HEAD
      className="w-[40px] rounded-lg aspect-square flex items-center justify-center bg-button hover:bg-button-hover transition-all duration-200 cursor-pointer ease-in"
=======
      className="w-[45px] rounded-lg aspect-square flex items-center justify-center bg-button hover:bg-button-hover transition-all duration-200 cursor-pointer ease-in"
>>>>>>> 1d46f6d440240a50b97cba0b1e2bb510d14f0400
      onClick={props.clickEvent}
    >
      {props.icon}
    </div>
  );
};

export default SquareButtons;
