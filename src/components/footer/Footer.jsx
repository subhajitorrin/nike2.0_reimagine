import React from "react";
import "./Footer.css";
import LowerFooter from "./footer division/LowerFooter";
import UpperFooter from "../footer/footer division/UpperFooter";
function Footer() {
  return (
    <>
      <UpperFooter />
      <div className="footerbreakline"></div>
      <LowerFooter />
    </>
  );
}

export default Footer;
