import React from "react";
import Img2 from "./images/2.jpg";
import "./styles/description.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Description() {
  return (
    <section className="description">
      <div className="description-container">
        <span className="subtitle">Que Hacemos</span>
        <h4 className="title">Innovación en hierbas aromáticas</h4>
        <p className="description-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae
        </p>
        <div className="check-grid">
          <p className="check-grid-text">
            <AiOutlineCheckCircle size={20} color="#C1A575" />
            <span className="check-span">Beauty & Spa</span>
          </p>
          <p className="check-grid-text">
            <AiOutlineCheckCircle size={20} color="#C1A575" />
            <span className="check-span">Expert Team Member</span>
          </p>
          <p className="check-grid-text">
            <AiOutlineCheckCircle size={20} color="#C1A575" />
            <span className="check-span">Low Cost</span>
          </p>
          <p className="check-grid-text">
            <AiOutlineCheckCircle size={20} color="#C1A575" />
            <span className="check-span">Trusted & Lovely</span>
          </p>
        </div>
        <div>
          <a href="/" className="button">
            Ver Más
          </a>
        </div>
      </div>
      <img alt="SPA" src={Img2} className="home-img3" />
    </section>
  );
}

export default Description;
