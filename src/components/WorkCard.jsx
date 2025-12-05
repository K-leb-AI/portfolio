import React from "react";

const WorkCard = (props) => {
  return (
    <div className="bg-bg-2 border-border border px-8 py-5 w-full rounded-lg">
      <div className="text-white mt-2 font-bold text-3xl">{props.title}</div>
      <div className="text-white mt-2 text-xl">{props.place}</div>
      <div className="text-white mt-2">{props.year}</div>
      <div className="text-white-2 pl-3 border-l-3 mt-2 font text-sm border-white italic font-mono">
        {props.comment}
      </div>
    </div>
  );
};

export default WorkCard;
