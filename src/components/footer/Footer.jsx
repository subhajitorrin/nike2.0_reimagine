import React from "react";
import "./Footer.css";
import LowerFooter from "./footer division/LowerFooter";
import UpperFooter from "../footer/footer division/UpperFooter";
function Footer() {
  return (
    <div>
      {/* <UpperFooter /> */}
      <div className="footerbreakline"></div>
      <LowerFooter />
    </div>
  );
}

export default Footer;
