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
      </div>
      <div className="slider-div">
        <SimpleSlider />
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
          Nos enorgullece contar que una empresa tan pequeña como es PerAqua,
          por la presentación diferenciada, la originalidad y la innovación de
          sus productos constituye elección en regalos institucionales y
          empresariales, que saben llegar a manos incluso de cancilleres y
          presidentes latinoamericanos.
        </p>
      </div>
    </section>
  );
}

export default Acknowledgments;
