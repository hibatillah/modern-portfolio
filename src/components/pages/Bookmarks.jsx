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
        className="container pt-10 pb-16 min-h-[80dvh] flex items-start gap-10 border-t border-slate-400/30 relative"
      >
        <div className="flex-[1_1_20%] sticky top-12 z-10">
          <h4 className="text-2xl font-bold bg-gradient-1 text-transparent bg-clip-text">
            Category
          </h4>
          <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-3 select-none">
            {label.map((item) => (
              <li
                key={item.id}
                onClick={() => setActiveLabel(item.name)}
                className={`px-6 pt-px pb-0.5 rounded-full border-label text-lg text-white cursor-pointer relative overflow-hidden`}
              >
                <span
                  className={`${
                    activeLabel === item.name ? "block" : "hidden"
                  } absolute inset-0 grid place-items-center pb-px text-white bg-gradient-1 z-0`}
                >
                  {item.name}
                </span>
                <div className="z-20">{item.name}</div>
              </li>
            ))}
          </ul>
          <div className="relative">
            <span className="absolute -left-20 -bottom-80 z-0 w-60 aspect-square rounded-full bg-indigo-600/50 blur-[100px]" />
          </div>
        </div>
        <div className="flex-[1_1_80%] z-10">
          <h4 className="text-2xl font-bold bg-gradient-1 text-transparent bg-clip-text capitalize">
            Bookmarks
          </h4>
          <ul className="mt-5 grid grid-cols-2 gap-x-3.5 gap-y-4 select-none">
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
        <span className="absolute right-0 -top-32 z-0 w-60 aspect-square rounded-full bg-indigo-600/50 blur-[100px]" />
      </div>
    </div>
  );
};

export default Bookmarks;
