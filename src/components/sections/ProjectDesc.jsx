import React from "react";

const ProjectDesc = ({ project }) => {
  return (
    <>
      <div className="grid grid-cols-3 items-start">
        <h4 className="col-span-1 text-2xl font-semibold text-slate-200">
          About Project
        </h4>
        <div className="col-span-2 space-y-2">
          {project.about.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3">
        <h4 className="col-span-1 text-2xl font-semibold text-slate-200">
          Tech Stack
        </h4>
        <div className="col-span-2 space-y-5">
          <p>
            This project is made using various latest technologies and adapts to
            current technological trends. Some of them that we use in this
            project are as follows
          </p>
          <ul className="space-y-3 text-lg font-medium text-slate-300">
            {project.tech.map((item) => (
              <li>
                {item.name}
                <span className="text-slate-400"> v{item.version}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <h4 className="col-span-1 text-2xl font-semibold text-slate-200">
          Screenshot
        </h4>
        <ul className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-5">
          {project.screenshot.map((item) => (
            <li className="aspect-video rounded-xl border border-slate-400/20 bg-slate-800/50">
              <img
                src={item}
                alt="preview project"
                className="img-cover rounded-lg"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectDesc;
