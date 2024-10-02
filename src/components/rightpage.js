import img from "../assets/img.png";

function Right(){
    return (
        <div className="cols-span-2 box2 ">
        <div className="flex justify-between www pt-20 pl-24 abt">
          <a href="www" className="clo text-xl font-semibold relative ">Home</a>
          <a href="www" className="clo text-xl font-semibold relative ">About us</a>
          <a href="www" className="clo text-xl font-semibold relative ">Blog</a>
          <a href="www" className="clo text-xl font-semibold relative ">Pricing</a>
         
        </div>
        <div className="flex">
          <img className="mt-14" src={img} alt="hh"></img>
        </div>
      </div>
    )
}
export default Right;