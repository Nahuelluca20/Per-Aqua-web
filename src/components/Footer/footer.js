import React from "react";
import "./footer.css";
import { BiMap } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { AiOutlineFacebook } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <h4 className="footer-title">Per Aqua</h4>
      <a href="/" className="button">Contactar</a>
      <div className="footer-grid">
        <p className="footer-item">
          <BiMap size={25} color="#C1A575"/>
          <span className="footer-span">La bodeguita- El Challao- Mendoza</span>
        </p>
        <p className="footer-item">
          <CgMail size={25} color="#C1A575"/>
          <span className="footer-span">support@gmail.com</span>
        </p>
        <p className="footer-item">
          <AiOutlineFacebook size={25} color="#C1A575"/>
          <span className="footer-span">Aromas Per Aqua</span>
        </p>
      </div>
      <p className="footer-rights">© Per Aqua. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
