import React from "react";
import github from "../assets/github.png";
import user from "../assets/user.png";
import instagram from "../assets/instagram.png"
import LinkedIn from "../assets/linkedin.png"



function Home() {
  return (
    <div className="">
      {/* navbar */}
           

      <div className="flex justify-between mt-52 pl-52 pr-36">
        <div>
          <pre className="fontt">
            Hi,
            <br />
          

            I'am <span className="text-sky-600">Alok</span><br />
            Web Developer
          </pre>
          <div className=""> 

          <button
            className="bg-sky-600 justify-center items-center w-40 h-12 rounded-md border-2 mt-16 flex text-sm font-roboto w-20 h-9  active:bg-violet-400 focus:outline-none "
            type="button"
            >
            <p className="font-semibold text-lg text-white ">Contact</p>
          </button>
            </div>
        </div>
        <div>
        <img src={user} alt="User" className=" h-4/5 	" />

        </div>
      </div>

      {/* link */}
      <div className="">
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

      </div>
    </div>
  );
}

export default Home;
