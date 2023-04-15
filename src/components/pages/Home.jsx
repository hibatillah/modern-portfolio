import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../sections";
import { Heading } from "../utilities";

const Home = () => {
  useEffect(() => {
    document.title = "Hibatillah";
  }, []);

  return (
    <div className="screen">
      <div className="container grid h-full grid-cols-5 pt-20">
        <div className="col-span-3 flex flex-col">
          <Heading
            page="portfolio"
            title="I'm a UI Designer & FrontEnd Developer,"
            highlight="M. Hibatillah"
            paragraph="Student majoring Information System, passionate on Web Development and love to Design."
          />
          <div className="mt-8 flex w-fit items-center gap-4">
            <Link to="projects">
              <button className="bg-gradient-1 group flex  items-center justify-center gap-3 rounded-full px-12 py-2 text-lg font-semibold text-white active:brightness-90">
                <span className="translate-x-[20%] transition-all duration-300 group-hover:translate-x-1">
                  Get Started
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  class="invisible h-6 w-6 translate-x-full fill-none stroke-white opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-x-1 group-hover:opacity-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>
            <a
              href="https://drive.google.com/file/d/1-1VmjgKE1JAtnofOF1U2s12Es3tCZWAi/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-label-2 hover:bg-gradient-2 flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-2 text-lg font-semibold text-white transition-colors duration-300 active:brightness-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-file-earmark-text-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z" />
                </svg>
                <span>CV</span>
              </button>
            </a>
          </div>
        </div>
        <div className="relative col-span-2 flex flex-wrap items-end justify-end gap-2 pb-8">
          <Hero />
          <span className="absolute left-10 top-1/4 z-0 aspect-square w-40 rounded-full bg-indigo-700 blur-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
