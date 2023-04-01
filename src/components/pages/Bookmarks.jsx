import React, { useState, useEffect } from "react";
import { Heading } from "../utilities";
import { BookmarkCard } from "../utilities";
import { label, bookmarks } from "../../db";

const Bookmarks = () => {
  useEffect(() => {
    document.title = "Hibatillah - Bookmarks";
  }, []);

  const [activeLabel, setActiveLabel] = useState("all");
  useEffect(() => {
    console.log("active label: " + activeLabel);
  }, [activeLabel]);

  const data =
    activeLabel === "all"
      ? bookmarks
      : bookmarks.filter((item) => item.label === activeLabel);

  return (
    <div className="min-h-screen">
      <div className="container py-20">
        <Heading
          page="bookmarks"
          title="Make it"
          highlight="easier"
          paragraph="Do it easier with our collection of bookmarks. We have collected many resources from around the internet to help us make something amazing and improve skills. Make the most of it, enjoy!"
        />
      </div>
      <div
        id="bookmarks"
        className="container relative flex min-h-[80dvh] items-start gap-10 border-t border-slate-400/30 pb-16 pt-10"
      >
        <div className="sticky top-12 z-10 flex-[1_1_20%]">
          <h4 className="bg-gradient-1 bg-clip-text text-2xl font-bold text-transparent">
            Category
          </h4>
          <ul className="mt-5 flex select-none flex-wrap gap-x-2 gap-y-3">
            {label.map((item) => (
              <li
                key={item.id}
                onClick={() => setActiveLabel(item.name)}
                className={`border-label relative cursor-pointer overflow-hidden rounded-full px-6 pb-0.5 pt-px text-lg text-white`}
              >
                <span
                  className={`${
                    activeLabel === item.name ? "block" : "hidden"
                  } bg-gradient-1 absolute inset-0 z-0 grid place-items-center pb-px text-white`}
                >
                  {item.name}
                </span>
                <div className="z-20">{item.name}</div>
              </li>
            ))}
          </ul>
          <div className="relative">
            <span className="absolute -bottom-80 -left-20 z-0 aspect-square w-60 rounded-full bg-indigo-600/50 blur-[100px]" />
          </div>
        </div>
        <div className="z-10 flex-[1_1_80%]">
          <h4 className="bg-gradient-1 bg-clip-text text-2xl font-bold capitalize text-transparent">
            Bookmarks
          </h4>
          <ul className="mt-5 grid select-none grid-cols-2 gap-x-3.5 gap-y-4">
            {data.map((el) =>
              el.list.map((item) => (
                <li key={item.id}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <BookmarkCard data={item} />
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>
        <span className="absolute -top-32 right-0 z-0 aspect-square w-60 rounded-full bg-indigo-600/50 blur-[100px]" />
      </div>
    </div>
  );
};

export default Bookmarks;
