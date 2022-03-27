import React from "react";
import "./styles/home.css";
import Img1 from "./images/1.jpg";
import Img3 from "./images/3.jpg";
import Description from "./description";
import Offer from "./offer"
import Services from "./services";
import Footer from "../../components/Footer/footer";


function Home() {
  return (
    <div className="">
      <section className="home">
        <div className="home-container">
          <h1 className="home-title">Beauty & Spa</h1>
          <h1 className="home-title">For Shine</h1>
          <p className="home-text">
            Quis autem vel eum iure reprehenderit <br /> quinea voluplate esse quam
            molestatie
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
      <Footer />
    </div>
  );
}

export default Home;
