import React from "react";
import class6 from "../../images/sixBanner.png";
import class7 from "../../images/sevenBanner.png";
import class8 from "../../images/eightBanner.png";
import class9 from "../../images/nineBanner.png";
import class10 from "../../images/tenBanner.png";
import { useNavigate } from "react-router-dom";

const Class = () => {
    const navigate = useNavigate()
  return (
    <div className="py-5">
      <h2 className="text-center text-black pt-14 pb-5 text-5xl font-semibold">
        Choose Your Class
      </h2>
      <div onClick={()=>{navigate('/six')}} className="w-3/5 rounded-3xl my-5 text-center mx-auto cursor-pointer">
        <img className=" rounded-3xl" src={class6} alt="class6" />
      </div>
      <div onClick={()=>{navigate('/seven')}} className="w-3/5 rounded-3xl my-5 text-center mx-auto cursor-pointer">
        <img className=" rounded-3xl" src={class7} alt="class7" />
      </div>
      <div onClick={()=>{navigate('/eight')}} className="w-3/5 rounded-3xl my-5 text-center mx-auto cursor-pointer">
        <img className=" rounded-3xl" src={class8} alt="class8" />
      </div>
      <div onClick={()=>{navigate('/nine')}} className="w-3/5 rounded-3xl my-5 text-center mx-auto cursor-pointer">
        <img className=" rounded-3xl" src={class9} alt="class9" />
      </div>
      <div onClick={()=>{navigate('/ten')}} className="w-3/5 rounded-3xl my-5 text-center mx-auto cursor-pointer">
        <img className=" rounded-3xl" src={class10} alt="class10" />
      </div>
    </div>
  );
};

export default Class;
