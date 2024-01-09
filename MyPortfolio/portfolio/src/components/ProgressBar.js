import React from "react";

const ProgressBar = ({ number }) => {
  return (
    <div className="w-full h-3 bg-black rounded-lg mb-2">
      <div
        className={`bg-[#FF0077] h-full rounded-lg progress_bar`}
        style={{ width: number + "%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
