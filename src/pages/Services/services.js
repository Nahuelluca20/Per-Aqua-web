import React from "react";
import "./styles/services.css";
import Img1 from "assets/servicios/S7300160.jfif";
import Img2 from "assets/servicios/S7302693.jfif";
import Img3 from "assets/servicios/S7301093.jfif";
import Img4 from "assets/servicios/S7301410.jfif";
import Img5 from "assets/servicios/S7300087.jfif";
import Img6 from "assets/servicios/mar y jorge.jpg";
import Img7 from "assets/servicios/fede.jpg";
import Img8 from "assets/servicios/DSCN7837.jfif";
import Img9 from "assets/servicios/BAÑO DE PIE.jpg";

function Services() {
  return (
    <section className="servicesPeraqua">
      <div className="intro-services">
        <div>
          <h4 className="intro-services-title">Servicios Spa Herbal</h4>
          <p className="intro-services-text">
            Siempre bajo la caricia envolvente que causan los vapores, las aguas
            y los aceites herbales, las propuestas que ofrece PerAqua a través
            de manos expertas son variadas.
            <br />
            <br />
            Atendemos en horarios exclusivos bajo reserva, a sanos y enfermos;
            parejas, amigos, familias, desde una persona que nos necesite para
            estar mejor hasta grupos de seis que quieran pasarla bien.
          </p>
        </div>

        <img src={Img1} alt="" className="intro-img" />
      </div>
      <div className="divider">
        <h1 className="divider-title">PERAQUA</h1>
      </div>
      <div className="services-offer">
        <div className="services-offer-grid">
          <div className="services-offer-grid-item">
            <h3 className="services-offer-grid-item-title">
              Sesión integral en aromas
            </h3>
            <p className="intro-services-text">
              Consiste en un turno de cuatro horas que incluye una sesión de
              Baño de Cajón herbal, Hidromasaje con hierbas en diferentes
              presentaciones y Caricias herbales. Incluye la tarde de té.
            </p>
            <div className="images-services-grid">
              <img src={Img5} alt="" className="images-services" />
              <img src={Img4} alt="" className="images-services" />
            </div>
          </div>

          <div className="services-offer-grid-item">
            <h3 className="services-offer-grid-item-title">
              Tarde de la amistad
            </h3>
            <p className="intro-services-text">
              Consiste en una Sesión Integral Grupal, que incluye Baño de Cajón,
              Hidromasaje, pediluvio herbal y otras delicadezas especiales. Es
              una promoción especial para cuatro a seis personas. Cuatro horas,
              incluye tarde de té.
            </p>
            <div className="images-services-grid">
              <img src={Img2} alt="" className="images-services" />
              <img src={Img3} alt="" className="images-services" />
            </div>
          </div>

          <div className="services-offer-grid-item">
            <h3 className="services-offer-grid-item-title">
              Noche de amor en aromas
            </h3>
            <p className="intro-services-text">
              La pareja ingresa a las 19 hs. Incluye una Sesión Integral en
              Aromas especialmente ambientada, y cena completa. Hasta la
              medianoche.
            </p>
            <div className="images-services-grid">
              <img src={Img8} alt="" className="images-services" />
              <img src={Img6} alt="" className="images-services" />
            </div>
          </div>

          <div className="services-offer-grid-item">
            <h3 className="services-offer-grid-item-title">
              Otros ESPECIALES:
            </h3>
            <ul className="intro-services-text">
              <li>
                Sesión de caricias herbales (suave masaje con aceites
                especiales)
              </li>
              <li>Reflexología de manos/pies</li>
              <li>Pediluvios, baños de parafina en manos</li>
              <li>Talleres/ciclos eventuales </li>
            </ul>
            <div className="images-services-grid">
              <img src={Img7} alt="" className="images-services" />
              <img src={Img9} alt="" className="images-services" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
