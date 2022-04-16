import React from "react";
import "./styles/services.css";
import Img1 from "assets/servicios/S7300160.jfif";
import Img2 from "assets/servicios/S7302693.jfif";
import Img3 from "assets/servicios/S7301093.jfif";

function Services() {
  return (
    <section className="services">
      <span className="subtitle services-subtitle">Spa Services</span>
      <h4 className="title services-title">Servicios Spa Herbal</h4>
      <div className="services-grid">
        <div className="services-item">
          <img src={Img3} alt="body" className="services-img" />
          <h5 className="item-title">Tarde de la amistad</h5>
          <p className="item-text">
            Consiste en una Sesión Integral Grupal, que incluye Baño de Cajón,
            Hidromasaje, pediluvio herbal y otras delicadezas especiales. Es una
            promoción especial para cuatro a seis personas. Cuatro horas,
            incluye tarde de té.
          </p>
        </div>

        <div className="services-item second">
          <img src={Img1} alt="body" className="services-img" />
          <h5 className="item-title">Sesión Integral en Aromas</h5>
          <p className="item-text">
            Consiste en un turno de cuatro horas que incluye una sesión de Baño
            de Cajón herbal, Hidromasaje con hierbas en diferentes
            presentaciones y Caricias herbales. Incluye la tarde de té.
          </p>
        </div>

        <div className="services-item 3 three">
          <img src={Img2} alt="body" className="services-img" />
          <h5 className="item-title">Noche de Amor en Aromas</h5>
          <p className="item-text">
            La pareja ingresa a las 19 hs. Incluye una Sesión Integral en Aromas
            especialmente ambientada, y cena completa. Hasta la medianoche.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
