import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navContainer">
      <nav>
        <div className="nav-left">
          <li>
            <span className="rightHover navList1">FIND A STORE</span>
          </li>
          <li>
            <span className="rightHover navList2">HELP</span>{" "}
          </li>
        </div>
        <div className="nav-right">
          <li>
            <span className="rightHover navList3">JOIN US</span>{" "}
          </li>
          <li>
            <span className="rightHover navList4">SIGN IN</span>{" "}
          </li>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
