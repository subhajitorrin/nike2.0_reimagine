import React, { useEffect, useRef, useState } from "react";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import { gsap } from "gsap";
import "./FullscreenNavbar.css";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import NavContents from "./NavContents/NavContents";
import MobileViewNavContents from "./NavContents/MobileViewNavContents";
import NikeLogo1 from "../../assets/NavbarClip/NikeLogo1.png";
import { SiNike } from "react-icons/si";

// const nikeManLogo =
//   "https://res.cloudinary.com/difxhccup/image/upload/v1719959216/nike_logo-removebg-preview_glhuf6.webp";
const nikeManLogo ="https://res.cloudinary.com/difxhccup/image/upload/v1720000185/nike_logo-removebg-preview_1_i4lcgc.webp";

function FullscreenNavbar({ toggleNavbar, settoggleNavbar }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollY, setscrollY] = useState(window.scrollY);
  const [navOyyehActive, setnavOyyehActive] = useState(false);
  const pathRef = useRef(null);
  const menuRef = useRef(null);
  const navContentsRef = useRef(null);

  const start = "M0,502S175,272,500,272S1000,502,1000,502V0H0Z";
  const end = "M0,1005S175,995,500,995S1000,1005,1000,1005V0H0Z";

  const tl1 = gsap.timeline({ paused: true });
  const tl2 = gsap.timeline({ paused: true });

  function reverseActiveFullscreenNavbar() {
    document.querySelector(".blureffect").style.opacity = "0";
    document.querySelector(".blureffect").style.pointerEvents = "none";
    setTimeout(() => {
      document.querySelector("html").style.overflow = "auto";
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
    setTimeout(() => {
      setnavOyyehActive(false);
    }, 1000);
  }
  function activeFullscreenNavbar() {
    document.querySelector(".blureffect").style.opacity = "1";
    document.querySelector(".blureffect").style.pointerEvents = "auto";
    setTimeout(() => {
      document.querySelector("html").style.overflow = "hidden";
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
    setnavOyyehActive(true);
  }

  useEffect(() => {
    function handleScroll() {
      setscrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
  }, [scrollY]);

  useEffect(() => {
    if (navContentsRef.current && toggleNavbar) {
      const t1 = gsap.timeline();
      t1.from(navContentsRef.current, {
        opacity: 0,
        y: 300,
        delay: 0.9,
        duration: 0.6,
      });
    } else if (navContentsRef.current && !toggleNavbar) {
      const t1 = gsap.timeline();
      t1.to(navContentsRef.current, {
        opacity: 0,
        y: -300,
        delay: 0.2,
        duration: 0.5,
      });
    }
  }, [toggleNavbar]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth > 768 && navOyyehActive && (
        <NavContents
          navContentsRef={navContentsRef}
          toggleNavbar={toggleNavbar}
        />
      )}
      {windowWidth <= 768 && navOyyehActive && (
        <MobileViewNavContents toggleNavbar={toggleNavbar} />
      )}
      <div
        className=""
        style={{
          opacity: `${toggleNavbar ? "1" : scrollY > 150 ? "1" : "0"}`,
          pointerEvents: `${
            toggleNavbar ? "auto" : scrollY > 150 ? "auto" : "none"
          }`,
        }}
      >
        {!navOyyehActive ? (
          <RiMenu3Fill
            className="menuicon text-black"
            ref={menuRef}
            onClick={activeFullscreenNavbar}
          />
        ) : (
          <RxCross2
            className="menuicon text-white"
            ref={menuRef}
            onClick={reverseActiveFullscreenNavbar}
          />
        )}
      </div>
      <div className="navarea" >
        <div className="navarea-option">
          <span className="navlist1 hoverEffect" data-text1="FIND A STORE">
            FIND A STORE
          </span>
          <span className="navlist2 hoverEffect" data-text2="HELP">
            HELP
          </span>
        </div>
        {/* <img
          src={NikeLogo1}
          alt="Nike Logo"
          width={50}
          height={50}
          className="mt-[-10px]"
          style={{
            filter: "invert(25%) sepia(70%) saturate(2137%) hue-rotate(331deg) brightness(105%) contrast(96%)",
          }}
        />  */}
        {/* <SiNike className="text-[3rem]"/> */}
        {windowWidth > 768 && (
          <img src={nikeManLogo} alt="" className="h-[60px]" />
        )}

        <div className="navarea-option">
          <span className="navlist3 hoverEffect" data-text3="JOIN US">
            JOIN US
          </span>
          <span className="navlist4 hoverEffect" data-text4="SIGN IN">
            SIGN IN
          </span>
        </div>
      </div>
      <div className="overlay">
        <svg
          viewBox="0 0 1000 1005"
          className="overlaySvg"
          style={{
            filter: "url(#f1)",
            height: windowWidth <= 768 ? "100vh" : "",
          }}
        >
          <path ref={pathRef} d="M0,2S175,1,500,1S1000,1,1000,1V0H0Z"></path>
        </svg>
      </div>
    </>
  );
}

export default FullscreenNavbar;
