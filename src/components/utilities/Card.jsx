import React from "react";

export const BookmarkCard = ({ data }) => {
  const labelColor = (data) => {
    switch (data) {
      case "inspiration":
        return "bg-teal-500/90";
      case "icon":
        return "bg-blue-600";
      case "illustration":
        return "bg-indigo-500";
      case "photo":
        return "bg-sky-500";
      case "mockup":
        return "bg-yellow-500/80";
      case "pattern":
        return "bg-red-600";
      case "typography":
        return "bg-stone-600";
      case "color":
        return "bg-fuchsia-500";
      case "3D":
        return "bg-pink-500";
      case "tools":
        return "bg-orange-500";
      case "plugin":
        return "bg-lime-500";
      case "quotes":
        return "bg-purple-500";
      default:
        return "bg-slate-500";
    }
  };

  return (
    <div className="flex h-full w-full cursor-pointer items-start gap-6 rounded-xl bg-slate-800/60 px-5 py-4 shadow-xl hover:bg-slate-800 hover:ring-1 hover:ring-slate-700/70 active:bg-slate-700/60 active:ring-1 active:ring-slate-600">
      <div className="mb-2 w-10 flex-none">
        <img
          src={data.img}
          alt={`${data.name}'s icon`}
          className="img-contain mt-1 rounded bg-top"
        />
      </div>
      <div className="flex-auto space-y-3">
        <div className="flex w-full justify-between">
          <div className="">
            <h3 className="text-xl font-semibold text-white">{data.title}</h3>
            <h4 className="text-slate-500">{data.path}</h4>
          </div>
          <div
            className={`mt-1 h-fit rounded-full px-6 py-1 text-sm font-medium text-white ${labelColor(
              data.label
            )}`}
          >
            {data.label}
          </div>
        </div>
        <p className="text-base leading-snug line-clamp-2">{data.desc}</p>
      </div>
    </div>
  );
};

export const ProjectCard = ({project}) => {
  return (
    <div className="group/card flex aspect-square w-full cursor-pointer flex-col rounded-2xl bg-slate-800/60 p-5 hover:bg-slate-700/40">
      <div className="relative flex-1 rounded-lg bg-slate-700/70 overflow-hidden">
        <img src={project.img} alt="preview project" className="img-cover brightness-90" />
        <div className="absolute bottom-4 right-4 h-fit flex-none rounded-full bg-blue-500 px-2 py-px text-xs font-medium uppercase text-white">
          new
        </div>
      </div>
      <div className="flex flex-none justify-between px-2 pt-4">
        <div className="space-y-1">
          <div className="flex items-baseline gap-3">
            <h3 className="text-xl font-bold text-slate-200 group-hover/card:text-blue-500">
              {project.name}
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="hidden h-4 w-4 group-hover/card:block group-hover/card:stroke-blue-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
          <p className="text-sm font-medium line-clamp-1">{project.short}</p>
        </div>
      </div>
    </div>
  );
};
