import React, { useEffect, useRef, useState } from "react";
import "./NavContents.css";
import { FaCaretRight, FaLeaf } from "react-icons/fa";
import navimg1 from "../../../assets/NavbarClip/navimg.jpg";
import clip1 from "../../../assets/NavbarClip/ezgif.com-video-to-gif-converter.gif";
// const clip1 = "https://res.cloudinary.com/dfdfbhvt3/video/upload/v1719990824/nikeclip2_pfvhyx.mp4";

import gsap from "gsap";
import { IoSearch } from "react-icons/io5";
import Tilt from "react-parallax-tilt";
import SubPoint from "./SubPoint";

const navList = ["New & Featured", "Men", "Women", "Kids", "Sale"];
const totalSubList = [
  {
    item: [
      [
        "New & Featured",
        "New Arrivals",
        "Latest Shoes",
        "Latest Clothing",
        "SNKRS Launch Calendar",
        "Get Em in SNKRS",
        "Customise with Nike By You",
        "Bestsellers",
        "Member Exclusive",
        "Top Kicks Under ₹8,000.00",
      ],
      [
        "Shop Icons",
        "Air Force 1",
        "Air Jordan 1",
        "Air Max",
        "Dunk",
        "Cortez",
        "Blazer",
        "Pegasus",
      ],
      ["New For Men", "Shoes", "Clothing", "Accessories", "Shop All New"],
      ["New For Women", "Shoes", "Clothing", "Accessories", "Shop All New"],
      ["New For Kids", "Shoes", "Clothing", "Accessories", "Shop All New"],
    ],
  },
  {
    item: [
      [
        "Featured",
        "New Releases",

        "Bestsellers",
        "Member Exclusive",
        "Jordan",
        "Lifestyle Running",
        "Customise with Nike By You",
        "Sale",
        "Running Shoe Finder",
        "Sustainable Materials",
      ],
      [
        "Jordan",
        "All Jordan",
        "New Jordan",
        "Jordan Shoes",
        "Jordan Clothing",
        "Jordan Basketball",
        "Jordan Lifestyle",
      ],
      [
        "shoes",
        "All Shoes",
        "Newest Sneakers",
        "Jordan",
        "Lifestyle",
        "Running",
        "Gym and Training",
        "Basketball",
        "Football",
        "Sandals and Slides",
        "Last Sizes Available",
        "Customise with Nike By You",
        "Top Picks Under ₹8,000",
      ],
      [
        "clothing",
        "All Clothing",
        "Tops and T-Shirts",
        "Shorts",
        "Pants and Leggings",
        "Hoodies and Sweatshirts",
        "Jackets and Gilets",
        "Jerseys and Kits",
      ],
      [
        "Accessories and Equipment",
        "All Accessories and Equipment",
        "Bags and Backpacks",
        "Socks",
        "Hats and Headwear",
      ],
      [
        "Shop By Sport",
        "Running",
        "Basketball",
        "Football",
        "Golf",
        "Tennis",
        "Gym and Training",
        "Yoga",
      ],
      [
        "Shop By Brand",
        "Running",
        "Nike Sportswear",
        "NikeLab",
        "Nike By You",
        "Jordan",
        "ACG",
        "NBA",
        "Nike SB",
      ],
    ],
  },
  {
    item: [
      [
        "Featured",
        "New Releases",
        "Bestsellers",
        "Member Exclusive",
        "Jordan",
        "Lifestyle Running",
        "Customise with Nike By You",
        "Sale",
        "Running Shoe Finder",
        "Sustainable Materials",
      ],
      [
        "Jordan",
        "All Jordan",
        "New Jordan",
        "Jordan Shoes",
        "Jordan Clothing",
        "Jordan Basketball",
        "Jordan Lifestyle",
      ],
      [
        "Shoes",
        "All Shoes",
        "Newest Sneakers",
        "Jordan",
        "Lifestyle",
        "Running",
        "Gym and Training",
        "Basketball",
        "Football",
        "Sandals and Slides",
        "Last Sizes Available",
        "Customise with Nike By You",
        "Top Picks Under ₹8,000",
      ],
      [
        "Clothing",
        "All Clothing",
        "Performance Essentials",
        "Tops and T-Shirts",
        "Sports Bras",
        "Pants and Leggings",
        "Shorts",
        "Hoodies and Sweatshirts",
        "Jackets and Gilets",
        "Skirts and Dresses",
        "Modest Wear",
        "Nike Maternity",
        "Plus Size",
      ],
      [
        "Accessories and Equipment",
        "All Accessories and Equipment",
        "Bags and Backpacks",
        "Socks",
        "Hats and Headwear",
      ],
      [
        "Shop By Sport",
        "Yoga",
        "Running",
        "Gym and Training",
        "Basketball",
        "Tennis",
        "Golf",
        "Football",
        "Skateboarding",
      ],
      [
        "Shop By Brand",
        "Running",
        "Nike Sportswear",
        "NikeLab",
        "Nike By You",
        "Jordan",
        "ACG",
        "NBA",
        "Nike SB",
      ],
    ],
  },
  {
    item: [
      [
        "Featured",
        "New Releases",
        "Newest Sneakers",
        "Easy On & Off",
        "Bestsellers",
        "Member Exclusive",
        "Jordan",
        "Last Sizes Available",
        "Bags and Backpacks",
        "Sale",
      ],
      [
        "Boys' Shoes",
        "All Shoes",
        "Older Boys (7 - 14 years)",
        "Younger Boys (4 - 7 years)",
        "Babies and Toddlers (0 - 4 years)",
        "Lifestyle",
        "Jordan",
        "Running",
        "Basketball",
        "Football",
        "Sandals and Slides",
      ],
      [
        "Girls' Shoes",
        "All Shoes",
        "Older Girls (7 - 14 years)",
        "Younger Girls (4 - 7 years)",
        "Babies and Toddlers (0 - 4 years)",
        "Lifestyle",
        "Jordan",
        "Running",
        "Basketball",
        "Football",
        "Sandals and Slides",
      ],
      [
        "Accessories and Equipment",
        "All Accessories and Equipment",
        "Bags and Backpacks",
        "Socks",
        "Hats and Headwear",
      ],
      [
        "Kids By Age",
        "Older Kids (7 - 14 years)",
        "Younger Kids (4 - 7 years)",
        "Babies & Toddlers (0 - 4 years)",
      ],
      [
        "Boys' Clothing",
        "Tops and T-Shirts",
        "Hoodies and Sweatshirts",
        "Pants and Leggings",
        "Shorts",
        "All Boys' Clothing",
      ],
      [
        "Girls' Clothing",
        "Tops and T-Shirts",
        "Sports Bras",
        "Hoodies and Sweatshirts",
        "Pants and Leggings",
        "Shorts",
        "All Girls' Clothing",
      ],
    ],
  },
  {
    item: [
      [
        "Sale",
        "Shop All Sale",
        "Shoes Sale",
        "Clothing Sale",
        "Accessories & Equipment Sale",
      ],
      [
        "Sale",
        "Shop All Sale",
        "Shoes Sale",
        "Clothing Sale",
        "Accessories & Equipment Sale",
      ],
      [
        "Sale",
        "Shop All Sale",
        "Shoes Sale",
        "Clothing Sale",
        "Accessories & Equipment Sale",
      ],
      ["Kids' Sale", "Shoes", "Clothing"],
    ],
  },
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
  const [isSublistHover, setisSublistHover] = useState(null);
  const [isHardIndex, setisHardIndex] = useState(null);
  const [isHardActive, setisHardActive] = useState(false);
  const [sublistContainerMouseMove, setsublistContainerMouseMove] =
    useState(false);
  function handelSublistMouseEnter() {
    // setsublistContainerMouseMove(true);
    // console.log(sublistContainerMouseMove);
  }
  function handelSublistMouseLeave() {
    // setsublistContainerMouseMove(false);
    // setisHardActive(false)
    // console.log(sublistContainerMouseMove);
  }
  function handleMouseClick() {
    // setisHardActive(true);
  }

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
  }, [toggleNavbar, sublistContainerMouseMove]);
  return (
    <div className="navContents" ref={navContentsRef}>
      <div className="navTop"></div>
      <div className="navMiddle">
        <div className="nleft">
          {navList.map((item, index) => {
            return (
              <div
                className="navlistseperator"
                onMouseEnter={handelSublistMouseEnter}
                onClick={handleMouseClick}
              >
                <span
                  className="navlistnames"
                  onMouseEnter={() => {
                    setisSublistHover(index);
                  }}
                  onClick={() => {
                    setisHardIndex(index);
                  }}
                >
                  {item}
                </span>

                <FaCaretRight style={{ position: "relative", top: "3px" }} />
              </div>
            );
          })}
        </div>
        {}
        {!isHardActive ? (
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
                      <img className="video" src={clip1} alt=''></img>
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
        ) : (
          <div className="subpoint" onMouseLeave={handelSublistMouseLeave}>
            <li>
              {totalSubList.map((item, index) => {
                return index === isSublistHover ? (
                  <SubPoint sublist={item} />
                ) : (
                  ""
                );
              })}
            </li>
          </div>
        )}
      </div>
      <div className="navBottom"></div>
    </div>
  );
}

export default NavContents;
