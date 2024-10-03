import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="flex w-[22vw] flex-col gap-4">
        <div className="skeleton h-[28vh] w-full rounded-2xl"></div>
        <div className="skeleton h-[4vh] w-[70%] rounded-2xl"></div>
        <div className="skeleton h-[4vh] w-full rounded-2xl"></div>
        <div className="skeleton h-[4vh] w-full rounded-2xl"></div>
      </div>
    </>
  );
};

export default Shimmer;
