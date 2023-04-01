import React from "react";
import reactjs from "../../assets/framework/reactjs.svg";
import tailwindcss from "../../assets/framework/tailwindcss.svg";
import bootstrap from "../../assets/framework/bootstrap.svg";
import laravel from "../../assets/framework/laravel.svg";
import codeigniter from "../../assets/framework/codeigniter.svg";

const ProjectDesc = ({ project }) => {
  const framework = [
    { name: "ReactJS", img: reactjs },
    { name: "TailwindCSS", img: tailwindcss },
    { name: "Bootstrap", img: bootstrap },
    { name: "Laravel", img: laravel },
    { name: "CodeIgniter", img: codeigniter },
  ];
  const data = framework.filter((item) => project.tech.includes(item.name));
  console.log(data);

  return (
    <div className="container grid min-h-[calc(100vh-127px)] grid-cols-3 py-20">
      <div className="col-span-1 space-y-10">
        <div className="space-y-4">
          <h4 className="text-xl font-medium text-blue-500">Web Design</h4>
          <h2 className="text-5xl font-bold text-slate-200">{project.name}</h2>
        </div>
        <div className="space-y-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fuga
            error accusantium est reprehenderit modi eaque quisquam nesciunt
            temporibus corrupti?
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {data.map((item) => (
              <li className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={`${item.name}'s icon`}
                  className="w-8 object-contain mix-blend-luminosity"
                />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          <a
            href="http://hibatillah.github.io/ProjectPD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-1 group/demo flex items-baseline gap-3 rounded-lg px-5 py-2 text-lg font-medium text-slate-100 hover:text-white hover:brightness-95 active:brightness-90">
              Live preview
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                class="bi bi-box-arrow-up-right fill-white transition-all duration-200 group-hover/demo:scale-110"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
            </button>
          </a>
          <a
            href="http://github.com/hibatillah/ProjectPD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-label group/code flex items-center gap-2 rounded-lg py-2 pl-5 pr-4 text-lg text-slate-200 hover:text-white active:brightness-95">
              <span className="translate-x-2.5 transition-all duration-300 group-hover/code:translate-x-0">
                Get Code
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                class="invisible mt-1 h-5 w-5 translate-x-1/2 opacity-0 transition-all duration-300 group-hover/code:visible group-hover/code:translate-x-0 group-hover/code:stroke-slate-100 group-hover/code:opacity-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default ProjectDesc;
