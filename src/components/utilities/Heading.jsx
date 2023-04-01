import React from "react";
import { Label } from "./";

const Heading = ({ page, title, highlight, paragraph, util }) => {
  return (
    <>
      <Label title={page} />
      <div className={`mt-4 flex flex-col gap-2 ${util}`}>
        <h1 className="leading-tight">
          {title}{" "}
          <span className="bg-gradient-1 bg-clip-text text-transparent">
            {highlight}
          </span>
        </h1>
        <p className="w-1/2">{paragraph}</p>
      </div>
    </>
  );
};

export default Heading;
