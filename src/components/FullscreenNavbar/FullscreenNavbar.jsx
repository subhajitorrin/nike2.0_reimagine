import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./FullscreenNavbar.css";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

function FullscreenNavbar({ setisNavActive }) {
  const [scrollY, setscrollY] = useState(window.scrollY);
  const [toggleNavbar, settoggleNavbar] = useState(false);
  const pathRef = useRef(null);
  const menuRef = useRef(null);

  const start = "M0,502S175,272,500,272S1000,502,1000,502V0H0Z";
  const end = "M0,1005S175,995,500,995S1000,1005,1000,1005V0H0Z";

  const tl1 = gsap.timeline({ paused: true });
  const tl2 = gsap.timeline({ paused: true });

  function reverseActiveFullscreenNavbar() {
    document.querySelector(".blureffect").style.opacity="0"
    document.querySelector(".blureffect").style.pointerEvents="none"
    setTimeout(() => {
      document.querySelector('html').style.overflow="auto";
    }, 900);

    tl2
      .to(
        pathRef.current,
        {
          duration: 0.6,
          attr: {
            d: start,
          },
          ease: "none",
        },
        "<"
      )
      .to(
        pathRef.current,
        {
          duration: 0.6,
          attr: {
            d: "M0,2S175,1,500,1S1000,1,1000,1V0H0Z",
          },
          ease: "none",
        },
        "-=0.3"
      );
    tl2.play();
    settoggleNavbar(false);
  }
  function activeFullscreenNavbar() {
    document.querySelector(".blureffect").style.opacity="1"
    document.querySelector(".blureffect").style.pointerEvents="auto"
    setTimeout(() => {
      document.querySelector('html').style.overflow="hidden";
    }, 10);
    tl1
      .to(
        pathRef.current,
        {
          duration: 0.6,
          attr: {
            d: start,
          },
          ease: "none",
        },
        "<"
      )
      .to(
        pathRef.current,
        {
          duration: 0.6,
          attr: {
            d: end,
          },
          ease: "none",
        },
        "-=0.3"
      );
    tl1.play();
    settoggleNavbar(true);
  }

  useEffect(() => {
    function handleScroll() {
      setscrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <>
      <div
        className=""
        style={{
          opacity: `${scrollY > 150 ? "1" : "0"}`,
          pointerEvents: `${scrollY > 150 ? "auto" : "none"}`,
        }}
      >
        {!toggleNavbar ? (
          <RiMenu3Fill
            className="menuicon"
            ref={menuRef}
            onClick={activeFullscreenNavbar}
          />
        ) : (
          <RxCross2
            className="menuicon"
            ref={menuRef}
            onClick={reverseActiveFullscreenNavbar}
          />
        )}
      </div>
      <div className="navarea">
        <div className="">these are navbar left content</div>
        <div className="">these are navbar right conenet</div>
      </div>
      <div className="overlay">
        <svg viewBox="0 0 1000 1005" className="overlaySvg" style={{filter:"url(#f1)"}}>
          <path ref={pathRef} d="M0,2S175,1,500,1S1000,1,1000,1V0H0Z"></path>
        </svg>
      </div>
    </>
  );
}

export default FullscreenNavbar;
