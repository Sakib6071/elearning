import { render } from "@testing-library/react";
import React from "react";
import Slider from "react-slick";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    
  };
  return (
    <div>
      <Slider {...settings} className='h-full overflow-hidden'>
        <div className="banner1 w-full">
          <img className=" w-full mx-auto" src={banner1} alt="banner" />
        </div>
        <div className="banner2">
          <img className=" w-full mx-auto" src={banner2} alt="banner" />
        </div>
        <div className="banner3">
          <img className=" w-full mx-auto" src={banner3} alt="banner" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
