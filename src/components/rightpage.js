import img from "../assets/img.png";
import { Link } from "react-router-dom";
function Right(){
 

    return (
        <div className="cols-span-2 box2 ">
        <div className="flex justify-between www pt-20 pr-16 pl-24 abt">
          <Link  to="/home" className="clo text-xl font-semibold relative ">Home</Link>
          <a href="www" className="clo text-xl font-semibold relative ">About us</a>
          <a href="www" className="clo text-xl font-semibold relative ">Blog</a>
          <a href="www" className="clo text-xl font-semibold relative ">Pricing</a>
          <Link  to="/contact_us" className="clo text-xl font-semibold relative" >Contact</Link>

         
        </div>
        <div className="flex">
          <img className="mt-14" src={img} alt="hh"></img>
        </div>
      </div>
    )
}
export default Right;