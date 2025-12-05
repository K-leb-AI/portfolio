import React from "react";

const LeftBlob = (props) => {
  return (
    <div
      className={`absolute w-${props.size} aspect-square opacity-45 bg-accent rounded-full top-6 left-0 backdrop-blur-xl blur-3xl`}
    ></div>
  );
};

export default LeftBlob;
