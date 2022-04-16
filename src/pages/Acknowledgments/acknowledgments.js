import React from "react";
import "./styles/acknowledgments.css";
import SimpleSlider from "components/Slider/slider";

function Acknowledgments() {
  return (
    <section className="acknowledgments">
      <div className="acknowledgments-container">
        <h1 className="title">Reconocimientos</h1>
        <span className="subtitle">
          En su larga trayectoria, PerAqua ha sido reconocida con diferentes
          galardones:
        </span>
        <ul>
          <li className="list-item">
            Premio a la Innovación Tecnológica IDITS
          </li>
          <li className="list-item">Nuevas Prácticas Comerciales IDC</li>
          <li className="list-item">Mendoza Innova</li>
          <li className="list-item">
            Premio Diseño y Gestión de Imagen Corporativa IDC
          </li>
          <li className="list-item">
            Premio a la Innovación y Creatividad en Agroturismo en el Concurso
            Nacional de Turismo Rural
          </li>
          <li className="list-item">Imagen Comercial ProArgentina </li>
          <li className="list-item">
            Menciones y Premio a la Excelencia Agropecuaria como Mejor Propuesta
            Agroturística del país
          </li>
          <li className="list-item">Entre otros.</li>
        </ul>
      </div>
      <div className="info-acknowledgments">
        <p className="text-acknowledgments">
          La firma ha participado en numerosas ferias y rondas de negocios a
          nivel nacional e internacional por la originalidad de sus productos
          gourmet. Esto ha hecho que la empresa y sus innovaciones alcanzaran
          diferentes escenarios en representación de Las Heras, de Mendoza y de
          Argentina.
          <br />
          <br />
          Nos enorgullece contar que una pequeña empresa como es PerAqua por su
          presentación diferenciada, su originalidad y por su innovación,
          constituye elección en regalos institucionales y empresariales, que
          saben llegar a manos de personalidades nacionales e internacionales.
        </p>
      </div>
      <div className="slider-div">
          <SimpleSlider />
        </div>
    </section>
  );
}

export default Acknowledgments;
