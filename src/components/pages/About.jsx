import React, { useEffect } from "react";
import { Heading } from "../utilities";
import { footer as data } from "../../db";
import profile from "../../assets/profile.png";
import CV from "../../assets/docs/Hibatillah's CV.pdf";

const About = () => {
  useEffect(() => {
    document.title = "Hibatillah - About";
  }, []);

  return (
    <>
      <div className="container relative space-y-6 py-20">
        <Heading
          page="about"
          title="Let's"
          highlight="Collaborate!"
          paragraph="Let's team up and make something amazing! I'm always looking for collaborations. Let's get started!"
        />
        <form action="mailto:hibatillahhabib@gmail.com" method="post">
          <div className="mt-10 w-fit overflow-hidden rounded-full">
            <input
              type="email"
              name="collab"
              id="collab"
              placeholder="Enter your email"
              className="w-60 rounded-l-full py-2 pl-6 pr-2 placeholder:text-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-1 rounded-r-full py-2 pl-4 pr-6 font-medium text-white active:brightness-90"
            >
              Send
            </button>
          </div>
        </form>
        <span className="absolute bottom-0 right-0 z-0 aspect-square w-60 rounded-full bg-blue-600/50 blur-[100px]" />
      </div>
      <div className="container flex items-start gap-10 border-t border-slate-400/30 py-10">
        <div className="flex flex-1 items-start gap-6 text-lg">
          <div className="w-10 overflow-hidden rounded-lg">
            <img src={profile} alt="hibatillah's logo" className="img-cover" />
          </div>
          <div className="relative flex flex-col gap-5">
            <div className="font-semibold text-slate-200">
              <h4 className="z-10">M. Hibatillah Hasanin</h4>
              <h4 className="z-10">Riau, Indonesia</h4>
            </div>
            <ul className="z-10 w-fit text-slate-500">
              <li>
                <a
                  href="mailto:hibatillah21si@mahasiswa.pcr.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="z-10 w-fit cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-blue-500">
                    hibatillah21si@mahasiswa.pcr.ac.id
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hibatillahhabib@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="z-10 w-auto cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-blue-500  ">
                    hibatillahhabib@gmail.com
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281381800123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-auto cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-blue-500">
                    +62 81381800123
                  </div>
                </a>
              </li>
            </ul>
            <a href={CV} download="CV Hibatillah" className="w-fit">
              <button className="bg-gradient-2 group z-10 flex w-52 flex-nowrap items-center justify-center gap-3 overflow-hidden rounded-lg px-8 py-2 text-lg font-semibold text-white active:brightness-90">
                <div className="visible flex flex-none translate-x-[52%] items-center gap-2 opacity-100 transition-all duration-700 ease-in-out group-hover:invisible group-hover:-translate-x-full group-hover:opacity-0">
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
                  <span>CV Hibatillah</span>
                </div>
                <div className="invisible flex flex-none translate-x-full items-center gap-3 opacity-0 transition-all duration-700 ease-in-out group-hover:visible group-hover:-translate-x-[55%] group-hover:opacity-100">
                  Download
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    class="h-6 w-6 fill-none stroke-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </button>
            </a>
            <span className="absolute -bottom-full -left-1/2 z-0 aspect-square w-48 rounded-full bg-teal-800 blur-[100px]" />
          </div>
        </div>
        <div className="flex flex-1 items-start justify-evenly text-lg">
          {data.map((item) => (
            <div key={item.id} className="flex-none">
              <h4 className="font-semibold text-white">{item.title}</h4>
              <ul className="mt-5 space-y-1.5 text-slate-500">
                {item.list.map((li) => (
                  <li>
                    <a href={li.link} target="_blank" rel="noopener noreferrer">
                      <div className="cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-blue-500">
                        {li.name}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
