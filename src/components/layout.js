import React, { useMemo  } from "react";
import Head from "./headsection";
import Socialmedialink from "./sociallinks";
import Right from "./rightpage";
import { ToastContainer } from "react-toastify";
import {   Outlet, useLocation } from "react-router-dom";
import Navsection from "./navsection";


const Layout = () => {
  const location = useLocation();

  const showLeftPage = useMemo(() => {
    const arr = ["/contact_us", "/home","/"];
    return !arr.includes(location.pathname);
  }, [location.pathname]);

  const isHomePage = useMemo(() =>
     location.pathname === "/" 
  ,[location.pathname]);
  return (
    <>
    <Navsection />

    <div className={isHomePage ? "w-full" : "grid grid-cols-2 gap-4"}>
      <div className={isHomePage ? "w-full" : "col-span-1 pt-20 pl-24"}>
        {showLeftPage && <Head />}
         
        
         <Outlet />
        
        {!isHomePage && <Socialmedialink />}

        <ToastContainer />
      </div>

      {/* Right page */}
      {!isHomePage && <Right />}
    </div>
    </>
  );
};

export default Layout;
