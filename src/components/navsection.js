import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navsection() {
  const [scroll, setscroll] = useState("");

  const onscroll = () => {
    if (window.scrollY < 15) {
      setscroll("");
    } else {
      setscroll("shadow-lg");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);
  return (
    <div
      className={`${scroll} w-full bg-white fixed top-0 flex flex-row-reverse`}
    >
      <div className=" w-1/2 abt bg-white flex justify-between pb-4  pt-12 px-14">
        <Link to="/" className="clo text-2xl font-semibold relative ">
          Home
        </Link>
        <a href="www" className="clo text-2xl font-semibold relative ">
          About us
        </a>
        <a href="www" className="clo text-2xl font-semibold relative ">
          Skills
        </a>
        <a href="www" className="clo text-2xl font-semibold relative ">
          Works
        </a>
        <Link to="/contact_us" className="clo text-2xl font-semibold relative">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navsection;
