import React from "react";

const Label = ({ title }) => {
  return (
    <div className="border-label w-fit rounded-full px-8 py-1 text-sm uppercase tracking-wide text-white">
      {title}
    </div>
  );
};

export default Label;
