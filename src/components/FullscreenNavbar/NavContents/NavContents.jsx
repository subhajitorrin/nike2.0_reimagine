import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./NavContents.css";
import { IoIosMan } from "react-icons/io";
import { IoIosWoman } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";
import { GiRunningShoe } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
import { PiMedalFill } from "react-icons/pi";
import { TbBrandKickstarter } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiArrowRightSFill } from "react-icons/ri";
import clip from "../../../assets/NavbarClip/nike_nav_clip.mp4";
import clip2 from "../../../assets/NavbarClip/nikeclip2.mp4";
import navimg from "../../../assets/NavbarClip/navimg.jpg";

const iconList = [
  <PiMedalFill className="navIcons" />,
  <IoIosMan className="navIcons" />,
  <IoIosWoman className="navIcons" />,
  <TbBrandKickstarter className="navIcons" />,
  <RiDiscountPercentFill className="navIcons" />,
  <FaEdit className="navIcons" />,
  <GiRunningShoe className="navIcons" />,
];
const iconNameList = [
  "Features",
  "Men",
  "Women",
  "Kids",
  "Sales",
  "Cusotmise",
  "Snekers",
];

function NavContents({ navContentsRef, navContentIconsX }) {
  const [isExpanded, setisExpanded] = useState(false);
  const [isAnimationActive, setisAnimationActive] = useState(false);
  const [isHovering, setisHovering] = useState(false);
  const [isActiveSubPoints, setisActiveSubPoints] = useState(false);
  const [ActiveSubPointIndex, setActiveSubPointIndex] = useState(-1);
  function handelExapnd() {
    if (isExpanded) {
      setisAnimationActive(true);
      setisExpanded(false);
      const t2 = gsap.timeline({
        onComplete: () => setisAnimationActive(false),
      });
      t2.to(".navTextSliderEffect", {
        width: 0,
        duration: 1,
        ease: "power3.inOut",
      });
      t2.to(".navMiddleRightRight", {
        width: "0%",
        duration: 1,
        ease: "power3.inOut",
      });
      t2.to(".navMiddleRightRight", {
        display: "none",
      });
      t2.to(".navMiddleRightLeft", {
        width: "0%",
        duration: 0.2,
        ease: "power3.inOut",
      }).to(
        ".expandicon",
        {
          transform: "rotate(360deg)",
          // rotate:180,
          ease: "power3.inOut",
          delay: 0.2,
        },
        1.2
      );
      t2.to(".navMiddleRightLeft", {
        display: "none",
      });
      t2.to(".navMiddleRightFullContainer", {
        width: "100%",
        duration: 1,
        ease: "power3.inOut",
      });
    } else {
      setisAnimationActive(true);
      setisExpanded(true);
      const t1 = gsap.timeline({
        onComplete: () => setisAnimationActive(false),
      });
      t1.to(".navMiddleRightFullContainer", {
        width: "0",
        duration: 1,
        ease: "power3.inOut",
      });
      t1.to(".navMiddleRightLeft", {
        display: "flex",
      });
      t1.to(".navMiddleRightLeft", {
        width: "14%",
        duration: 0.2,
        ease: "power3.inOut",
      }).to(
        ".expandicon",
        {
          transform: "rotate(180deg)",
          // rotate:180,
          ease: "power3.inOut",
          delay: 0.2,
        },
        1.2
      );
      t1.to(".navMiddleRightRight", {
        display: "flex",
      });
      t1.to(".navMiddleRightRight", {
        width: "80%",
        duration: 1,
        ease: "power3.inOut",
      });
      t1.to(".navTextSliderEffect", {
        width: "370px",
        duration: 1,
        delay: 0.2,
        ease: "power3.inOut",
      });
    }
  }
  return (
    <div className="navContents" ref={navContentsRef}>
      <div className="navUpper"></div>
      <div className="navMiddle">
        <div className="navMiddleLeft full-height">
          <div
            className=""
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {iconList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="navContentIconsX"
                  ref={navContentIconsX}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="">
            <MdOutlineKeyboardArrowRight
              className="navIcons expandicon"
              onClick={handelExapnd}
              style={{ pointerEvents: isAnimationActive ? "none" : "auto" }}
            />
          </div>
        </div>
        <div className="navMiddleRight full-height">
          <div className="navMiddleRightLeft">
            {iconNameList.map((item, index) => {
              return (
                <div
                  className=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginLeft: "25px",
                    marginRight: "25px",
                  }}
                  onMouseEnter={() => {
                    setisHovering(true);
                  }}
                  onMouseLeave={() => {
                    setisHovering(false);
                  }}
                  onClick={() => {
                    setisActiveSubPoints(true);
                    setActiveSubPointIndex(index);
                  }}
                >
                  <p key={index} className="iconNameList">
                    {item}
                    <div
                      className="navline"
                      style={{
                        width: ActiveSubPointIndex === index ? "100%" : "0%",
                      }}
                    ></div>
                  </p>
                  <RiArrowRightSFill style={{ fontSize: "1.5rem" }} />
                </div>
              );
            })}
          </div>
          <div className="navMiddleRightRight">
            <div
              className="withHover"
              style={{ opacity: isHovering || isActiveSubPoints ? 1 : 0 }}
              onMouseLeave={() => {
                setisActiveSubPoints(false);
                setActiveSubPointIndex(-1);
              }}
            ></div>
            <div
              className="withoutHover"
              style={{ opacity: isHovering || isActiveSubPoints ? 0 : 1 }}
            >
              <div className="withoutHoverimgcontainer">
                <img src={navimg} />
              </div>
              <div className="withoutHovertextcontainer">
                <h1>
                  <span className="navtextup">There is</span>
                  <br />
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "10px",
                    }}
                  >
                    <span style={{ fontSize: "8rem" }}>no</span>
                    <div className="navTextSliderEffect">
                      <video src={clip2} muted autoPlay loop></video>
                    </div>
                  </span>
                  <span
                    style={{
                      fontSize: "5.9rem",
                      position: "relative",
                      top: "-1.5rem",
                    }}
                    className="navtextdown"
                  >
                    finish line
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="navMiddleRightFullContainer">
            <video src={clip} muted autoPlay loop></video>
          </div>
        </div>
      </div>
      <div className="navLower"></div>
    </div>
  );
}

export default NavContents;
