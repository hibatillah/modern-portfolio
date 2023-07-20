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
          paragraph="Endlessly looking for collaborations, team up and make something amazing!"
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
      <div className="container grid grid-cols-2 items-start gap-10 border-t border-slate-400/30 py-10">
        <div className="flex items-start gap-6 text-lg">
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
            <span className="absolute -bottom-full -left-1/2 z-0 aspect-square w-48 rounded-full bg-teal-800 blur-[100px]" />
          </div>
        </div>
        <div className="flex items-start justify-around text-lg">
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
