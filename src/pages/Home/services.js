import React from 'react'
import "./styles/services.css"
import Img1 from "./images/5.jpg";
import Img2 from "./images/6.jpg";
import Img3 from "./images/7.jpg";


function Services() {
  return (
    <section className="services">
      <span className="subtitle services-subtitle">Spa Services</span>
      <h4 className="title services-title">We provide Awesome Spa & Beauty Service</h4>
      <div className="services-grid">
        <div className="services-item">
          <img src={Img1} alt="body" className="services-img"/>
          <h5 className="item-title">Body Theraphy</h5>
          <p className="item-text">
            Quis autem vel eum iure reprehen
            derit quiea voluptate velit esse quam
            nihil molestiae consequa
          </p>
        </div>

        <div className="services-item second">
          <img src={Img3} alt="body" className="services-img"/>
          <h5 className="item-title">Leg & Nail Theraphy</h5>
          <p className="item-text">
            Quis autem vel eum iure reprehen
            derit quiea voluptate velit esse quam
            nihil molestiae consequa
          </p>
        </div>

        <div className="services-item 3 three">
          <img src={Img2} alt="body" className="services-img"/>
          <h5 className="item-title">Face Theraphy</h5>
          <p className="item-text">
            Quis autem vel eum iure reprehen
            derit quiea voluptate velit esse quam
            nihil molestiae consequa
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services