import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./navbar.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home/home";
import About from "pages/About/about";
import Acknowledgments from "pages/Acknowledgments/acknowledgments";
import Services from "pages/Services/services";
import Wagon from "pages/Wagon/wagon";
import Products from "pages/Products/products";



function Navbar() {
  const [visible, setVisible] = useState("false");
  const handleVisible = () => {
    if (visible === "false") {
      setVisible("true");
    } else {
      setVisible("false");
    }
  };

  const navItems = [
    {
      name: "Inicio",
      route: `${process.env.PUBLIC_URL}/`,
      component: <Home />
    },
    {
      name: "Nuestra Historia",
      route: `about`,
      component: <About />
    },
    {
      name: "Reconocimientos",
      route: `${process.env.PUBLIC_URL}/reconocimientos`,
      component: <Acknowledgments />
    },
    {
      name: "Servicios Spa",
      route: `${process.env.PUBLIC_URL}/servicios`,
      component: <Services />
    },
    {
      name: "El vagón Cultural",
      route: `${process.env.PUBLIC_URL}/vagon-cultural`,
      component: <Wagon />
    },
    {
      name: "Productos Gourmet Relax",
      route: `${process.env.PUBLIC_URL}/productos`,
      component: <Products />
    },
  ];
  return (
    <BrowserRouter>
      <div>
        <nav className="mobile-nav">
          <h3>PerAqua</h3>
          <div onClick={handleVisible}>
            <AiOutlineMenu color="white" size={30} />
          </div>
          <ul className="ul-mobile" data-visible={visible}>
          {navItems.map((item) => {
              return (
                <Link className="links-mobile" to={item.route} key={item.name} onClick={handleVisible}>
                  {item.name}
                </Link>
              );
            })}
          </ul>
        </nav>

        <nav className="desktop-nav">
          <h3>PerAqua</h3>
          <div className="links-container">
            {navItems.map((item) => {
              return (
                <Link className="links" to={item.route} key={item.name}>
                  {item.name}
                </Link>
              );
            })}
          </div>
          <a className="services-button">Contactar</a>
        </nav>
        <Routes>
          {navItems.map((item) => {
            return (
              <Route path={item.route} element={item.component} key={item.name} />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Navbar;
