import { Link } from "react-router-dom";
import eye from "../assets/eye.png";
import closeeye from "../assets/closeeye.png"
import { useMemo, useState } from "react";


function Form() {
  const [visible ,notVisible]=useState("password");
   
  const eyeF= ()=> {
    if (visible == "password") {
      notVisible("text");
    }
    else{
      notVisible("password");
    }
  }

const passeye=useMemo(()=>{
  if (visible == "password") {
  return closeeye;
  }
  else{
  return eye;
  }
},[visible])
  
  return (
    <form>
      <div className="mt-14 border-2 clo pl-4 pt-1 pb-2 rounded-sm">
        <label>
          Enter your Email:
          <br />
          <input className="outline-" type="text" />
          <br />
        </label>
      </div>

      <div className="border-t-0 border-2  pl-4 pt-1 pb-2 clo rounded-sm">
        <label>
          {" "}
          Enter your password:
          <br />
          <div className="password">
          <input className="outline- text-blue-600 " type={visible} id="password"/>{" "}
          <img src={passeye} onClick={eyeF} className="pass-icon" id="pass-icon" alt="sd"></img>
          </div>
        </label>
      </div>

      <div className="flex mt-5 justify-between">
        <label className="flex  justify-between  text-sm font-roboto w-28 ">
          <input type="checkbox" name="" className=" mb-1" />
          <p className=" clo ">Remember Me</p>
        </label>
        <p className=" clo text-sm font-roboto">Forgot password?</p>
      </div>
      <div className="grr mt-12">
        
          <button
            className=" text-sm  btncolor font-roboto w-20 h-9 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..."
            type="button"
          >
            Login
          </button>
      
        <Link to="/sign-up">
          <button
            className=" border-2  text-sm font-roboto w-20 h-9  active:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300 ..."
            type="button"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </form>
  );
}
export default Form;
