import React from "react";
import Slider from "react-slick";
import "./slider.css";
import Img1 from "assets/reconocimientos/colombia.jpg";
import Img2 from "assets/reconocimientos/DSCN2191.jfif";
import Img3 from "assets/reconocimientos/DSCN3214.jfif";
import Img4 from "assets/reconocimientos/DSCN9461.jfif";
import Img5 from "assets/reconocimientos/IMG_5458.jfif";
import Img6 from "assets/reconocimientos/Julian.jpg";
import Img7 from "assets/reconocimientos/mau1.jpg";
import Img8 from "assets/reconocimientos/premio 2016 foto.jpg";
import Img9 from "assets/reconocimientos/premio IDC.jpg";

function SimpleSlider() {
  const settings = {
    dots: true,
    arrows: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings} className="slider-container">
      <div className="slider-item">
        <img src={Img1} alt="" className="slider-img"/>
      </div>
      <div className="slider-item">
        <img src={Img2} alt="" className="slider-img"/>
      </div>
      <div className="slider-item">
        <img src={Img3} alt="" className="slider-img"/>
      </div>
      <div className="slider-item">
        <img src={Img4} alt="" className="slider-img"/>
      </div>
      <div className="slider-item">
        <img src={Img5} alt="" className="slider-img"/>
      </div>
      <div className="slider-item">
        <img src={Img6} alt="" className="slider-img"/>
      </div>
      <div className="slider-item">
        <img src={Img7} alt="" className="img-maui"/>
      </div>
      <div className="slider-item">
        <img src={Img8} alt="" className="slider-img"/>
      </div>
      <div className="slider-item">
        <img src={Img9} alt="" className="slider-img"/>
      </div>
    </Slider>
  );
}

export default SimpleSlider;
