import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <form>
        <div className="gap-x-6 flex  ">
          <div  className="mt-8 border-2 clo pl-4 pt-1 pb-2 w-1/2 rounded-sm">
            <label>
              First Name:
              <br />
              <input className="outline-" type="text" />
              <br />
            </label>
          </div>

           <div  className="mt-8 border-2 clo pl-4 pt-1 pb-2 w-1/2 rounded-sm">
          <label>
            Last Name:
            <br />
            <input className="outline-" type="text" />
            <br />
          </label>
            </div>

        </div>

        <div>

        <div className="mt-4 border-2 clo pl-4 pt-1 pb-2 rounded-sm">
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
            <input className="outline- text-blue-600 " type="text" />{" "}
          </label>
        </div>
        </div>

        <div className="grr mt-12">
            <button
              className=" text-sm  btncolor font-roboto w-20 h-9 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..."
              type="button"
            >
              <p>Sign up</p>
            </button>
            <Link to="/">
            <button
              className=" border-2  text-sm font-roboto w-20 h-9  active:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300 ..."
              type="button"
              >
              Login
            </button>
                </Link>
          </div>
      </form>
    </div>
  );
}

export default Signup;
