import React from "react";
import class6 from "../../images/sixBanner.png";
import class7 from "../../images/sevenBanner.png";
import class8 from "../../images/eightBanner.png";
import class9 from "../../images/nineBanner.png";
import class10 from "../../images/tenBanner.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"


const Class = () => {
    const navigate = useNavigate()
  return (
    <div id="classes" className="py-5">
      <h2 className="text-center text-green-700 pt-14 pb-5 text-5xl font-semibold">
        Choose Your Class
      </h2>

      {/* All class design */}
      
      <motion.div whileHover={{ scale: 1.1 }} onClick={()=>{navigate('/six')}} className="w-3/5 rounded-3xl my-5 text-center mx-auto cursor-pointer">
        <img className=" rounded-3xl" src={class6} alt="class6" />
      </motion.div>
      <motion.div whileHover={{scale:1.1}} onClick={()=>{navigate('/seven')}} className="w-3/5 rounded-3xl my-5 text-center mx-auto cursor-pointer">
        <img className=" rounded-3xl" src={class7} alt="class7" />
      </motion.div>
      <motion.div whileHover={{scale:1.1}} onClick={()=>{navigate('/eight')}} className="w-3/5 rounded-3xl my-5 text-center mx-auto cursor-pointer">
        <img className=" rounded-3xl" src={class8} alt="class8" />
      </motion.div>
      <motion.div whileHover={{scale:1.1}} onClick={()=>{navigate('/nine')}} className="w-3/5 rounded-3xl my-5 text-center mx-auto cursor-pointer">
        <img className=" rounded-3xl" src={class9} alt="class9" />
      </motion.div>
      <motion.div whileHover={{scale:1.1}} onClick={()=>{navigate('/ten')}} className="w-3/5 rounded-3xl my-5 text-center mx-auto cursor-pointer">
        <img className=" rounded-3xl" src={class10} alt="class10" />
      </motion.div>
    </div>
  );
};

export default Class;
