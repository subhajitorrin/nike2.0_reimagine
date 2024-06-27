import React, { useEffect, useRef, useState } from "react";
import "../Footer.css";
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import ExpandDiv from "./ExpandDiv";

const nikeProducts = [
  "Nike Adapt",
  "Nike Air",
  "Nike Air Force 1",
  "Nike Air Max",
  "Nike FlyEase",
  "Nike Flyknit",
  "Nike Flyleather",
  "Nike Free",
  "Nike Joyride",
  "Nike Pegasus",
  "Nike React",
  "Nike Vaporfly",
  "Nike Zoom Fly",
  "Nike ZoomX",
];

function LowerFooter() {
  const guideHover = useRef(null);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleMouseEnter() {
    if (guideHover.current) {
      guideHover.current.style.opacity = "1";
      guideHover.current.style.pointerEvents = "auto";
    }
  }
  function handleMouseLeave() {
    if (guideHover.current) {
      guideHover.current.style.opacity = "0";
      guideHover.current.style.pointerEvents = "none";
    }
  }

  const footerMobList = [
    {
      title: "Resources",
      list: [
        "Get Help",
        "Order Status",
        "Delivery",
        "Returns",
        "Payment Options",
        "Contact Us On Nike.com Inquries",
        "Contact Us On All Other Inquiries",
      ],
    },
    {
      title: "Help",
      list: ["Find a store", "Become a master", "Send us feedback"],
    },

    {
      title: "Company",
      list: ["About Nike", "News", "Careers", "Investors", "Sustainability"],
    },
  ];

  if (innerWidth <= 768) {
    return (
      <div className="px-[1.5rem] pb-[4rem] flex flex-col gap-[3rem] bg-[white] ">
        <div className="flex flex-col gap-[1rem]">
          <ExpandDiv list={footerMobList[0]} />
          <ExpandDiv list={footerMobList[1]} />
          <ExpandDiv list={footerMobList[2]} />
        </div>
        <div className="flex gap-[5px] items-center text-[1.2rem] font-bold">
          <TfiWorld className="worldicon text-[#707072]" />
          India
        </div>
        <div className="flex flex-col gap-[.5rem] font-bold text-[#707072]">
          <p>2024 Nike, Inc, All rights reserved</p>
          <p className="flex items-center gap-[10px]">
            Guides <IoIosArrowDown />
          </p>
          <p>Terms of Sale</p>
          <p>Terms of Use</p>
          <p>Nike Privacy Policy</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="lowerfooter h-[529px]">
        <div className="footerBoxesContainer ">
          <div className="footerbox">
            <ul>
              <h3>Resources</h3>
              <li>Find A Store</li>
              <li>Become A Member</li>
              <li>Send Us Feedback</li>
            </ul>
          </div>
          <div className="footerbox">
            <ul>
              <h3>Helo</h3>

              <li>Get Help</li>
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us On Nike.com Inquiries</li>
              <li>Contact Us On All Other Inquiries</li>
            </ul>
          </div>
          <div className="footerbox">
            <ul>
              <h3>Company</h3>
              <li>About Nike</li>
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>
          <div className="footerbox">
            <div className="footerindia">
              <TfiWorld className="worldicon" />
              <h3 id="india">India</h3>
            </div>
          </div>
        </div>
        <div className="footerLinerContainer  ">
          <ul>
            <li>&#169;2024 Nike2.0, Inc. All rights reserved</li>
            <li className="footerguidesicon" onMouseLeave={handleMouseLeave}>
              <div className="guideList" ref={guideHover}>
                {nikeProducts.map((item, index) => {
                  return (
                    <p key={index} className="guidelistitem">
                      {item}
                    </p>
                  );
                })}
              </div>
              <span onMouseEnter={handleMouseEnter} className="spanGuide">
                Guides
                <IoIosArrowDown />
              </span>
            </li>
            <li className="footerHover">Terms of Sale</li>
            <li className="footerHover">Terms of Use</li>
            <li className="footerHover">Nike Privacy Policy</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LowerFooter;
