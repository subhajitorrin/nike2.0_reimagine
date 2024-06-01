import React, { useRef } from "react";
import "../Footer.css";
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";

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

  return (
    <div className="lowerfooter">
      <div className="footerBoxesContainer">
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
      <div className="footerLinerContainer">
        <ul>
          <li>&#169;2024 Nike2.0, Inc. All rights reserved</li>
          <li className="footerguidesicon" onMouseLeave={handleMouseLeave}>
            <div className="guideList" ref={guideHover}>
              {nikeProducts.map((item, index) => {
                return <p className="guidelistitem">{item}</p>;
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

export default LowerFooter;
