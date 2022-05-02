import React from "react";
import "./styles/about.css";
import Img1 from "assets/nuestraHistoria/PAISAJE-PERAQUA1.jpg";
import Img2 from "assets/nuestraHistoria/piscina.jpg";
import Img3 from "assets/nuestraHistoria/Diapositiva17.jfif";
import Img4 from "assets/nuestraHistoria/Imagen6.jpg";
import Img5 from "assets/nuestraHistoria/foto-velas-hidro.jfif";
import Img6 from "assets/nuestraHistoria/invernadero2.jpg";
import Img7 from "assets/nuestraHistoria/rincones.jpg";
import Img8 from "assets/nuestraHistoria/secadero.jpg"; 

function About() {
  return (
    <section className="about">
      <h1 className="title-about">Nuestra Historia</h1>
      <div>
        <div className="info-about-1">
          <div className="img-container-wagon">
            <img src={Img1} alt="" className="img-about" />
            <img src={Img2} alt="" className="img-about" />
          </div>
          <p className="about-text">
            PerAqua es un innovador Centro de Bienestar dedicado al turismo del
            ocio, a la relajación y a la sanación a través de las hierbas
            aromáticas y sus propiedades medicinales.
          </p>
        </div>

        <div className="info-about-2">
          <p className="about-text-2">
            Somos una empresa familiar dedicada a brindar servicios de Spa
            Herbal y al desarrollo de Productos de Innovación. Hemos recorrido
            un largo camino desde que abrimos nuestro espacio en el 2007,
            eligiendo el paisaje pedemontano para la inmersión de los sentidos,
            conjugando nuestros cultivos de hierbas mediterráneas con los
            beneficios medicinales de las plantas nativas de la zona. Somos un
            establecimiento que respeta y defiende activamente el entorno que lo
            rodea.
          </p>
          <div className="img-container-wagon">
            <img src={Img6} alt="" className="img-about" />
            <img src={Img4} alt="" className="img-about" />
          </div>
        </div>

        <div className="info-about-1">
          <div className="img-container-wagon">
            <img src={Img3} alt="" className="img-about" />
            <img src={Img5} alt="" className="img-about" />
          </div>
          <p className="about-text">
            PerAqua es un lugar diferente, donde nuestras hierbas aromáticas son
            luego transformadas en originales productos Gourmet & Relax, y
            también en diferenciados servicios de Spa Herbal, un spa medicinal
            como no hay otro igual.
          </p>
        </div>

        <div className="info-about-2">
          <p className="about-text-2">
            Somos un verdadero spa tradicional, donde la Salus Per Aqua, es
            decir la salud a través del agua se trabaja mediante vapores y aguas
            herbales, con caricias de aceites especiales en un plácido ambiente
            natural. En este diseño sencillo, pero único y exclusivo, las
            emociones se ponen a flor de piel, los sentidos se agudizan y el
            cuerpo se entrega a manos expertas que van llevando por un circuito
            de depuración, una limpieza profunda física y emocional.
          </p>
          <div className="img-container-wagon">
            <img src={Img7} alt="" className="img-about" />
            <img src={Img8} alt="" className="img-about" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
