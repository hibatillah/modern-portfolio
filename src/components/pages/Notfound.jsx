import React, { useEffect } from "react";
import { Heading } from "../utilities";

const Notfound = () => {
  useEffect(() => {
    document.title = "Not Found";
  }, []);

  return (
    <div className="screen">
      <div className="container grid h-full place-items-center py-20">
        <div className="flex flex-col items-center justify-center ">
          <Heading
            page="Not Found"
            title="Something"
            highlight="went wrong"
            paragraph="Ouch, it looks like we couldn't find the page you were searching for. Let's get you back on track!"
            util="items-center text-center"
          />
          <a href="/">
            <button className="bg-gradient-2 mt-8 rounded-full px-8 py-2 font-semibold text-white active:brightness-90">
              Back to home
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
