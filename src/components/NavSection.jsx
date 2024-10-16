import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navsection() {
  const [scroll, setScroll] = useState("");
  const location = useLocation();

  const onScroll = () => {
    if (window.scrollY < 15) {
      setScroll("");
    } else {
      setScroll("shadow-lg");
    }
  };
  const handleScrollToSkills = () => {
    const skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToAbout = () => {
    const skillsSection = document.getElementById("about-section");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isContactPage = location.pathname === "/ContactUs";

  return (
    <div
      className={`${scroll} w-full ${
        isContactPage && !scroll ? "bg-transparent" : "bg-white"
      } z-10 fixed top-0 flex flex-row-reverse transition-colors duration-300`}
    >
      <div className="w-1/2 abt flex justify-between pb-4 pt-9 px-14">
        <Link to="/" className="clo text-2xl font-semibold relative ">
          Home
        </Link>
        <Link to="" className="clo text-2xl font-semibold relative " onClick={handleScrollToAbout}>
          About me
        </Link>
        <Link to="" className="clo text-2xl font-semibold relative " onClick={handleScrollToSkills}>
          Skills
        </Link>
        <Link to="AboutMe" className="clo text-2xl font-semibold relative ">
          Works
        </Link>
        <Link to="/ContactUs" className="clo text-2xl font-semibold relative">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navsection;
