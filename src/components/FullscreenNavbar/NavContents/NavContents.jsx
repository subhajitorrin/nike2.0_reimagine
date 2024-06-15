import React, { useEffect, useRef } from "react";
import "./NavContents.css";
import { FaCaretRight } from "react-icons/fa";
import navimg1 from "../../../assets/NavbarClip/navimg.jpg";
import clip1 from "../../../assets/NavbarClip/nikeclip2.mp4";
import gsap from "gsap";
import { IoSearch } from "react-icons/io5";
import Tilt from "react-parallax-tilt";

const navList = [
  "New & Featured",
  "Men",
  "Women",
  "Kids",
  "Sale",
  "Customise",
  "SNKRS",
];

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

function NavContents({ navContentsRef, toggleNavbar }) {
  const navClipRef = useRef(null);
  useEffect(() => {
    if (toggleNavbar) {
      gsap.to(navClipRef.current, {
        width: "437px",
        duration: 1,
        delay: 1,
        ease: "power4.inOut",
      });
    }
  }, [toggleNavbar]);
  return (
    <div className="navContents" ref={navContentsRef}>
      <div className="navTop"></div>
      <div className="navMiddle">
        <div className="nleft">
          {navList.map((item, index) => {
            return (
              <span className="navlistseperator">
                <span className="navlistnames">{item}</span>
                <FaCaretRight style={{ position: "relative", top: "3px" }} />
              </span>
            );
          })}
        </div>
        <div className="nright">
          <div className="navdefault">
            <div className="searchcontainer">
              <input type="text" placeholder="Search your shoewear" />
              <div className="searchright">
                <IoSearch style={{ fontSize: "1.5rem" }} />
              </div>
            </div>
            <div className="navdefaultleft">
              <Tilt className="navimgcontainer">
                <img src={navimg1} />
              </Tilt>
            </div>
            <div className="navdefaultright">
              <div className="navtextcontainer">
                <span style={{ fontSize: "10rem" }}>there is</span>
                <span
                  style={{
                    fontSize: "12rem",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div>no</div>
                  <div className="navvideocontainer" ref={navClipRef}>
                    <video src={clip1} muted loop autoPlay></video>
                  </div>
                </span>
                <span
                  style={{
                    fontSize: "7.6rem",
                    position: "relative",
                    top: "-12px",
                  }}
                >
                  finish line
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navBottom"></div>
    </div>
  );
}

export default NavContents;
