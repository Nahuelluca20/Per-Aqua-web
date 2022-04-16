import React from "react";
import "./styles/home.css";
import Img1 from "./images/1.jpg";
import Img3 from "./images/3.jfif";
import Description from "./description";
import Offer from "./offer";
import Services from "./services";

function Home() {
  return (
    <div className="">
      <section className="home">
        <div className="home-container">
          <h1 className="home-title">Per Aqua Spa Herbal</h1>
          <p className="home-text">
            PerAqua pone la magia al alcance de la mano.
            <br /> Te invitamos a tomarla
          </p>
          <a href="/" className="services-button">
            Explorar Servicios
          </a>
        </div>
        <div className="image-container">
          <img alt="SPA" src={Img1} className="home-img1" />
          <img alt="SPA" src={Img3} className="home-img2" />
        </div>
      </section>

      <Description />
      <Offer />
      <Services />
    </div>
  );
}

export default Home;
