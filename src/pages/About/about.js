import React from "react";
import "./styles/about.css"
import Img1 from "assets/nh1.jpeg"
import Img2 from "assets/nh2.jpeg"

function About() {
  return (
    <section className="about">
      <h1 className="title-about">Nuestra Historia</h1>
      <div>
        <div className="info-about-1">
          <img src={Img1} alt="" className="img-about"/>
          <p className="about-text">
            Somos una empresa familiar argentina dedicada a la innovación y al
            placer, que ha recorrido un largo camino desde el 2007 hasta hoy.
            Proponemos un circuito que se inicia con la producción de hierbas
            aromáticas mediterráneas de cultivos propios, que luego son
            transformadas en originales productos gourmet - relax y en servicios
            de spa herbal únicos en Mendoza.
          </p>
        </div>

        <div className="info-about-2">
          <p className="about-text-2">
            Elegimos el paisaje pedemontano para la inmersión de los sentidos,
            conjugando las hierbas mediterráneas con los beneficios de las
            plantas nativas propias de la zona, Somos un establecimiento que
            respeta y brega por el entorno que lo rodea.
            <br />
            <br />
            PerAqua es un innovador Centro de Bienestar dedicado al turismo del
            ocio, a la relajación y a la sanación a través de las hierbas y sus
            propiedades aromático-medicinales.
          </p>
          <img src={Img2} alt="" className="img-about"/>
        </div>

        <div className="info-about-3">
          <img src={Img1} alt="" className="img-about"/>
          <p className="about-text">
            Somos un verdadero spa, un spa tradicional como no hay otro igual,
            donde la <i>Salus Per Aqua</i>, es decir la <i>salud a través del agua</i> se
            trabaja mediante vapores herbales, aguas aromatizadas y caricias con
            aceites especiales. En este diseño único y exclusivo, las emociones
            se ponen a flor de piel, los sentidos se agudizan y el cuerpo se
            entrega a manos expertas que van llevando al paciente o visitante
            por un circuito de limpieza profunda, física y emocional.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
