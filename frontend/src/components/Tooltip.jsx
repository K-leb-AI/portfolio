import React from "react";

const Tooltip = (props) => {
  return (
    <div className="relative group">
      <div className="z-2">{props.component}</div>
      <div className="z-99 py-2 px-4 bg-bg-3 text-white rounded-lg absolute top-[20%] text-xs -left-[230%] invisible opacity-0 group-hover:-left-[240%] duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
        {props.tooltip}
      </div>
    </div>
  );
};

export default Tooltip;
10;
