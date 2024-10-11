import React from "react";
// import github from "../assets/github.png";
// import instagram from "../assets/instagram.png";
// import LinkedIn from "../assets/linkedin.png";
import dp from "../assets/dp.png";
import Myskills from "./myskills";

function Home() {
  return (
    <div className="">
      {/* navbar */}

      <div className="grid grid-cols-2 gap-12 mt-32 mx-12 ">
        <div className="flex justify-center">
          <div className="col-span-1 pt-20">
            <pre className="fontt">
              Hi,
              <br />
              <span
                className="relative w-[max-content]
                before:absolute before:inset-0 before:animate-typewriter
                before:bg-white
                after:absolute after:inset-0 after:w-[0.110em] after:animate-caret
                after:bg-black"
              >
                I'am <span className="text-sky-600">Alok</span> .
              </span>
              <br />
              Web Developer
            </pre>
            <div className="">
              <button
                className="bg-sky-600 justify-center items-center w-48 h-16 rounded-xl border-2 mt-16 flex text-sm font-roboto w-20 h-9  active:bg-violet-400 focus:outline-none "
                type="button"
              >
                <p className="font-semibold text-2xl text-white ">Contact</p>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex justify-center">
            <img src={dp} alt="User" className=" w-4/5" />
          </div>
        </div>
      </div>

      {/* link */}
      {/* <div className="">
        <div className="pl-52 flex gap-x-5	">
          <a href="http://www.linkedin.com">
            <img className="h-6" src={LinkedIn} alt="ww"></img>
          </a>
          <a href="http://www.instagram.com">
            <img className="h-6" src={instagram} alt="ww"></img>
          </a>
          <a href="http://www.github.com">
            <img className="h-6" src={github} alt="ww"></img>
          </a>
        </div>
      </div> */}

      {/* tools */}
      <div className="mt-32">
        <Myskills />
      </div>
      {/* end */}
    </div>
  );
}

export default Home;
