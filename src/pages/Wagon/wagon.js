import React from "react";
import "./styles/wagon.css";
import Img1 from "assets/vagonCultural/S7300708.jfif";
import Img2 from "assets/vagonCultural/S7301555.jfif";
import Img3 from "assets/vagonCultural/48427983_2347297768848968_1574519943968325632_n.jpg";
import Img4 from "assets/vagonCultural/S7300704.jfif";
import Img5 from "assets/vagonCultural/29-de-face.jpg";
import Img6 from "assets/vagonCultural/20181230_000210.jpg";

function About() {
  return (
    <section className="about">
      <h1 className="title-about">Vagón Cultural</h1>
      <div>
        <div className="info-about-1">
          <img src={Img1} alt="" className="img-about" />
          <p className="about-text">
            El placer libera endorfinas. El servicio, la calidez de la atención
            profesional y nuestras hierbas aplicadas correctamente buscan
            recuperar la homeostasis, el equilibrio de nuestro cuerpo.
          </p>
        </div>

        <div className="info-about-2">
          <p className="about-text-2">
            Trabajamos mucho para que PerAqua sea un lugar donde sentirse mejor,
            donde el mundo sea más bello y generoso. Por ello el arte es muy
            importante para nosotros, complace nuestros sentidos y pertenece a
            nuestro mismo universo.
          </p>
          <img src={Img2} alt="" className="img-about" />
        </div>

        <div className="info-about-3">
          <img src={Img6} alt="" className="img-about" />
          <p className="about-text">
            Infinidad de muestras nos han acompañado estos años, junto a
            artistas reconocidos y también emergentes, cuya pintura, cerámicas,
          </p>
        </div>

        <div className="info-about-2">
          <p className="about-text-2">
            cuentos para adultos, bailes, cantos o la música de violín,
            bandoneón, fagot, oboe, bombo o guitarra, han enriquecido múltiples
            veladas.
          </p>
          <img src={Img4} alt="" className="img-about" />
        </div>

        <div className="info-about-3">
          <img src={Img3} alt="" className="img-about" />
          <p className="about-text">
            Hoy, como siempre, es una historia que permanece abierta para
            convertirse cada tanto en un nuevo e inolvidable “Atardecer en
            Aromas”, acompañado con degustaciones aromáticas
          </p>
        </div>

        <div className="info-about-2">
          <p className="about-text-2">
            bajo las estrellas de El Challao o a veces en el interior de un
            furgón de cola de valor patrimonial, un vagón de tren de finales del
            1800 donde el tiempo cobra otro sentido.
          </p>
          <img src={Img5} alt="" className="img-about" />
        </div>
      </div>
    </section>
  );
}

export default About;
