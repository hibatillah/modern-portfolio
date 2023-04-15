import React, { useEffect } from "react";
import { Heading } from "../utilities";
import { projects } from "../../db";
import { ProjectCard } from "../utilities";

const Projects = () => {
  useEffect(() => {
    document.title = "Hibatillah - Projects";
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container py-20">
        <Heading
          page="projects"
          title="Make some"
          highlight="Design"
          paragraph="Discover my projects! Browse through my projects adventures and see the innovative solutions I've developed. Have a look at my projects and get inspired!"
        />
      </div>
      <div className="container relative border-t border-slate-400/30 py-10">
        <ul className="grid grid-cols-3 gap-5">
          {projects.map((item) => (
            <li key={item.id} className="col-span-1 p-5">
              <a href={`projects/desc/${item.id}`}>
                <ProjectCard project={item} />
              </a>
            </li>
          ))}
        </ul>
        <span className="absolute -top-20 right-2 z-0 aspect-square w-60 rounded-full bg-indigo-600/50 blur-[100px]" />
      </div>
    </div>
  );
};

export default Projects;
