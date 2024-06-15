import React, { useEffect, useRef } from "react";
import "./NavContents.css";
import { FaCaretRight } from "react-icons/fa";
import navimg1 from "../../../assets/NavbarClip/navimg.jpg";
import clip1 from "../../../assets/NavbarClip/nikeclip2.mp4";
import gsap from "gsap";
import { IoSearch } from "react-icons/io5";

const navList = [
  "New & Featured",
  "Men",
  "Women",
  "Kids",
  "Sale",
  "Customise",
  "SNKRS",
];

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
              <input type="text" placeholder="Search your shoewear"/>
              <div className="searchright">
                <IoSearch style={{ fontSize: "1.5rem" }} />
              </div>
            </div>
            <div className="navdefaultleft">
              <div className="navimgcontainer">
                <img src={navimg1} />
              </div>
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
