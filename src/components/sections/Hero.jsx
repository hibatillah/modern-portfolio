import React from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.png";

const Hero = () => {
  return (
    <>
      <div className="hero-col relative">
        <span className="absolute bottom-1 right-1 aspect-square w-20 border-b-2 border-r-2 border-secondary" />
      </div>
      <div
        id="design"
        className="hero-col hero-card relative flex flex-col items-center justify-between self-end bg-blue-700 p-3 shadow-md shadow-blue-900"
      >
        <div className="z-10 flex w-full items-start justify-between">
          <h4 className="text-xs text-white">Project</h4>
        </div>
        <div className="z-10 flex w-full items-end justify-between">
          <h2 className="text-xl font-bold text-white">UI Design</h2>
          <Link to="projects#design">
            <div className="group grid aspect-square w-10 place-items-center rounded-full border-2 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-6 w-6 -rotate-45 fill-white transition-all duration-200 group-hover:rotate-0 group-active:scale-90"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div
        id="profile"
        className="hero-col hero-card relative flex flex-col items-center justify-between p-3"
      >
        <div className="flex w-full items-start justify-between">
          <h4 className="text-xs text-white">Profile</h4>
        </div>
        <img
          src={profile}
          loading="eager"
          alt="hibatillah's profile"
          className="absolute left-1/2 top-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        />
        <div className="flex w-full items-end justify-between">
          <h2 className="text-lg font-bold text-white">Habib</h2>
          <Link to="about">
            <div className="group grid aspect-square w-10 place-items-center rounded-full border-2 border-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-6 w-6 -rotate-45 fill-white transition-all duration-200 group-hover:rotate-0 group-active:scale-90"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div
        id="web"
        className="hero-col hero-card relative flex flex-col items-center justify-between p-3"
      >
        <div className="flex w-full items-start justify-between">
          <h4 className="text-xs text-white">Project</h4>
        </div>
        <div className="flex w-full items-end justify-between">
          <h2 className="text-xl font-bold leading-tight text-white">
            Web
            <br />
            Development
          </h2>
          <Link to="projects#web">
            <div className="group grid aspect-square w-10 place-items-center rounded-full border-2 border-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-6 w-6 -rotate-45 fill-white transition-all duration-200 group-hover:rotate-0 group-active:scale-90"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div
        id="address"
        className="hero-col hero-card relative flex h-[15%] flex-col justify-between self-start bg-indigo-700 px-2.5 pb-1 pt-2 shadow-md shadow-indigo-900"
      >
        <div className="flex items-start justify-between">
          <h4 className="text-xs text-white">Indonesia</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-6 w-6 fill-white"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-bold text-white">Pekanbaru, Riau</h2>
          <h4 className="text-[10px] text-white">GMT +7</h4>
        </div>
        <span className="absolute -bottom-2/3 -left-4 h-24 w-0.5 bg-blue-600" />
        <span className="absolute -bottom-4 -left-1/4 h-0.5 w-24 bg-blue-600" />
      </div>
      <div
        id="app"
        className="hero-col hero-card relative flex flex-col items-center justify-between self-start bg-teal-500/90 p-3 shadow-md shadow-teal-900"
      >
        <div className="flex w-full items-start justify-between">
          <h4 className="text-xs text-white">Project</h4>
        </div>
        <div className="flex w-full items-end justify-between">
          <h2 className="text-xl font-bold leading-tight text-white">
            App
            <br />
            Development
          </h2>
          <Link to="projects#app">
            <div className="group grid aspect-square w-10 place-items-center rounded-full border-2 border-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-6 w-6 -rotate-45 fill-white transition-all duration-200 group-hover:rotate-0 group-active:scale-90"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
