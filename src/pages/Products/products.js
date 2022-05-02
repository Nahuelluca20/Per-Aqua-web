import React from "react";
import "./styles/products.css";
import Img1 from "assets/products/Gourmet-1.jpg"
import Img2 from "assets/products/Gourmet-2.jpg"
import Img3 from "assets/products/3.jpg"
import Img4 from "assets/products/4.jpg"
import Img5 from "assets/products/aceites.jpg"



function Products() {
  return (
    <section className="products">
      <div className="product-init">
        <span className="subtitle">Productos PerAqua</span>
        <h4 className="title">
          <b>PRODUCTOS</b> GOURMET & RELAX
        </h4>
        <p className="description-text">
          En PerAqua encontramos una tienda artesanal donde se ofrece una línea
          de elaboración propia con novedosos productos GOURMET & RELAX, todos
          ellos únicos en el mercado, que pueden ser adquiridos como regalos,
          como recuerdo de los buenos momentos y también para tratamientos en
          casa.
        </p>
      </div>

      <div className="product-container-1">
        <h5 className="title-products">
          <i>
            Gourmet: La cocina de todos los días toma un aire de fiesta en los
            cerros
          </i>
        </h5>
        <p className="description-text text-product-1">
          Buscamos el despertar de la imaginación y de los sentidos.
          <br />
          <br />
          La sencillez y naturalidad son nuestro sello distintivo; sólo un
          “touch”, un pequeño toque de nuestros productos puede convertir los
          platos cotidianos en una delicadeza gourmet.
          <br />
          <br />
          Durante años de investigación y desarrollo hemos podido captar el
          poder del cerro mendocino y la fuerza del sol, logrando atrapar el
          alma de las hierbas cultivadas con delicados cuidados y personal
          atención en cada uno de nuestros innovadores productos.
          <br />
          <br />
          Dentro de la Línea Gourmet, se encuentran sales y azúcares
          aromatizados con lavanda, romero, menta, manzanilla; vinos especiados,
          ajíes jalapeños rodajados, cacao con lavanda y otras variadas
          delicatessen.
        </p>
        <div className="product-img-div">
          <img src={Img1} alt="producto gourmet" className="img-product-1" />
          <img src={Img2} alt="producto gourmet" className="img-product-1" />
        </div>
      </div>

      <div className="product-container">
        <h5 className="title-products">
          <i>Relax: El aroma de los cerros en la piel</i>
        </h5>
        <p className="description-text text-product">
          La propuesta de nuestra tienda se complementa con productos
          artesanales de relax, como sales aromatizadas para baño, tinturas,
          aceites de hierbas y almohadillas térmicas con variadas semillas y
          flores, entre otros.
          <br />
          <br />
          Estos productos Gourmet & Relax se utilizan en los servicios que se
          brindan en nuestro SPA HERBAL.
        </p>
        <div className="product-img-div">
          <img src={Img3} alt="producto gourmet" className="img-product" />
          <img src={Img4} alt="producto gourmet" className="img-product" />
          <img src={Img5} alt="producto gourmet" className="img-product" />
        </div>
      </div>
    </section>
  );
}

export default Products;
