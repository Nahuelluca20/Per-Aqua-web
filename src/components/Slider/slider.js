import React from "react";
import Slider from "react-slick";
import "./slider.css";

function SimpleSlider() {
  const settings = {
    dots: true,
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
      <div className="slider-item slider-1">
        <h3 className="slider-title">Premio a la Innovación Tecnológica IDITS</h3>
      </div>
      <div className="slider-item slider-2">
        <h3 className="slider-title">Nuevas Prácticas Comerciales IDC</h3>
      </div>
      <div className="slider-item slider-3">
        <h3 className="slider-title">Premio Diseño y Gestión de Imagen Corporativa IDC</h3>
      </div>
      <div className="slider-item slider-4">
        <h3 className="slider-title">Imagen Comercial ProArgentina</h3>
      </div>
      <div className="slider-item slider-5">
        <h3 className="slider-title">Mendoza Innova</h3>
      </div>
    </Slider>
  );
}

export default SimpleSlider;
