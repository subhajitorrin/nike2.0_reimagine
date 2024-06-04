import React, { useEffect } from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { gsap } from "gsap";

function Navbar() {
  useEffect(() => {
    let nav = document.querySelector(".middle");

    const handleMouseEnter = () => {
      let tl = gsap.timeline();
      tl.to("#nav-bottom", {
        height: "32vh",
        duration: 0.0000000000000000000000000000000000000001
      })
      tl.to(".nav2-middle-elem h5", {
        display: "block",
        duration: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001
      })
      tl.to(".nav2-middle-elem h5 span", {
        y: 0,
        stagger: {
          amount: 0.001,
          duration: 0.01
        }
      })
    };

    const handleMouseLeave = () => {
      let tl = gsap.timeline();
      tl.to(".nav2-middle-elem h5 span", {
        y: 25,
        stagger: {
          amount: 0.02,
          duration: 0.0000000000000000000000000000000000000001
        }
      })
      tl.to(".nav2-middle-elem h5", {
        display: "none",
        duration: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000001
      })
      tl.to("#nav-bottom", {
        height: "0vh",
        duration: 0.0000000000000000000000000000000000000001
      })
    };

    nav.addEventListener("mouseenter", handleMouseEnter);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mouseenter", handleMouseEnter);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(()=>{
    let input = document.querySelector('.nav2left_input');
    let Hiddennav = document.querySelector('.hidden-searchbarContainer');
    let Cancelbtn = document.querySelector('.hidden-searchbar-cancelbtn');
    let HiddenSearhicon = document.querySelector('.hidden-search-icon');
    let hiddensearchbarinputsearchicon = document.querySelector('.nav2-left-input');
    const handelHiddennav = ()=>{
      Hiddennav.style.display="initial";
      hiddensearchbarinputsearchicon.style.transform = "translateX(-100px)";
    }
    const handelNav = ()=>{
      Hiddennav.style.display="none";
      hiddensearchbarinputsearchicon.style.transform = "translateX(0)";
    }
    return ()=>{
      input.addEventListener("click",handelHiddennav);
      Cancelbtn.addEventListener("click",handelNav);
      HiddenSearhicon.addEventListener("click",handelHiddennav);
    }
  },[])
  return (
    <div className="navContainer" >
      <nav>
        <div className="nav-left">
          <li>
            <span className="rightHover navList1">FIND A STORE</span>
          </li>
          <li>
            <span className="rightHover navList2">HELP</span>
          </li>
        </div>
        <div className="nav-right">
          <li>
            <span className="rightHover navList3">JOIN US</span>
          </li>
          <li>
            <span className="rightHover navList4">SIGN IN</span>
          </li>
        </div>
      </nav>
      <div className="nav2">
        <div className="nav2-right">
          <svg
            aria-hidden="true"
            className="swoosh-svg"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="70px"
            height="70px"
            fill="none"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="middle">
          <div className="nav2-middle-elem">
            <h4>
              <span>New & Featured</span>
            </h4>
            <h5>
              <span>New & Featured</span>
            </h5>
            <h5>
              <span>New Arrivals</span>
            </h5>
            <h5>
              <span>Latest Shoes</span>
            </h5>
            <h5>
              <span>Latest Clothing</span>
            </h5>

            <h5>
              <span>Get Em in SNKRS</span>
            </h5>
            <h5>
              <span>Bestsellers</span>
            </h5>
            <h5>
              <span>Member Exclusive</span>
            </h5>
          </div>
          <div className="nav2-middle-elem">
            <h4>
              <span>Men</span>
            </h4>
            <h5>
              <span>Shoes</span>
            </h5>
            <h5>
              <span>Clothing</span>
            </h5>
            <h5>
              <span>Accessories</span>
            </h5>
            <h5>
              <span>Shop All New</span>
            </h5>

          </div>
          <div className="nav2-middle-elem">
            <h4>
              <span>Women</span>
            </h4>
            <h5>
              <span>Shoes</span>
            </h5>
            <h5>
              <span>Clothing</span>
            </h5>
            <h5>
              <span>Accessories</span>
            </h5>
            <h5>
              <span>Shop All New</span>
            </h5>
          </div>
          <div className="nav2-middle-elem">
            <h4>
              <span>Kids</span>
            </h4>
            <h5>
              <span>Shoes</span>
            </h5>
            <h5>
              <span>Clothing</span>
            </h5>
            <h5>
              <span>Accessories</span>
            </h5>
            <h5>
              <span>Shop All New</span>
            </h5>

          </div>
        </div>
        <div className="nav2-left">
          <div className="nav2-left-input">
            <CiSearch className="search-icon" />
            <input type="text" placeholder="Search" className="nav2left_input"/>
          </div>
          <CiSearch className="hidden-search-icon" />
          <FaRegHeart className="nav-left-icon" />
          <IoBagOutline className="nav-left-icon" />
        </div>
        <div id="nav-bottom"></div>
      </div>

      <div className="hidden-searchbarContainer">

      <div className="hidden-searchbar">
        <div className="hidden-searchbar-Nikelogo">
          <svg
            aria-hidden="true"
            className="swoosh-svg"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="70px"
            height="70px"
            fill="none"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>

        <div className="hidden-searchbar-input">

          <div className="hidden-searchbar-input-searchicon">
            <input type="text" placeholder="Search"/>
            <CiSearch className="hidden-searchbar-searchicon" />
          </div>
          <div className="search_option">
            <li><span>Popular Search Terms</span></li>
            <li><span>Air Force 1</span></li>
            <li><span>Jordan</span></li>
            <li><span>Air Max</span></li>
            <li><span>Blazer</span></li>
          </div>
        </div>

        <div className="hidden-searchbar-cancelbtn">
          <span>Cancel</span>
        </div>

      </div>
      </div>
    </div>
  );
}

export default Navbar;
