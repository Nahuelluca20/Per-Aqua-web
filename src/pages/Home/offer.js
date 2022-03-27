import React from "react";
import Img from "./images/4.jpg";
import "./styles/offer.css";
import { RiPlantLine } from "react-icons/ri";
import { CgBowl } from "react-icons/cg";

function Offer() {
  return (
    <section className="offer">
      <img alt="SPA" src={Img} className="offer-img" />
      <div className="offer-container">
        <span className="subtitle">What We offer</span>
        <h4 className="title">Natural Beauty & Spa Therapy</h4>

        <div className="offer-description">
          <div>
            <RiPlantLine color="white" size={30} className="offer-icon" />
          </div>
          <div>
            <h6 className="offer-title">Organic Product</h6>
            <p className="offer-text">
              Again is there anyone whote pursues desires to obtain pain
            </p>
          </div>
        </div>

        <div className="offer-description">
          <div>
            <CgBowl color="white" size={30} className="offer-icon" />
          </div>
          <div>
            <h6 className="offer-title">Biography Safe</h6>
            <p className="offer-text">
              Again is there anyone whote pursues desires to obtain pain
            </p>
          </div>
        </div>
        <div className="button-div">
          <a href="/" className="button">
            Ver Más
          </a>
        </div>
      </div>
    </section>
  );
}

export default Offer;
