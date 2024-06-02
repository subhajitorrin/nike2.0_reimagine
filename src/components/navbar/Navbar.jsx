import React from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
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
      <div className="nav2">
        <div className="nav2-right">
          <svg aria-hidden="true" class="swoosh-svg" focusable="false" viewBox="0 0 24 24" role="img" width="70px" height="70px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg></div>

        <div className="middle">
          <li><span>New & Featured</span></li>
          <li><span>Men</span></li>
          <li><span>Women</span></li>
          <li><span>Kids</span></li>
          <li><span>Sale</span></li>
          <li><span>Coustomise</span></li>
          <li><span>SNKRS</span></li>
        </div>

        <div className="nav2-left">
          <div className="nav2-left-input">
            <CiSearch className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <FaRegHeart className="nav-left-icon"/>
          <IoBagOutline className="nav-left-icon"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
