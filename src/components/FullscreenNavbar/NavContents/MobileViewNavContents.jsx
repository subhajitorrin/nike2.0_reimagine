import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function MobileViewNavContents({ toggleNavbar }) {
  const mobileNavContentesRef = useRef(null);
  const navList = [
    "New & Featured",
    "Men",
    "Women",
    "Kids",
    "Sale",
    "Customise",
    "SNKRS",
  ];
  useEffect(() => {
    if (mobileNavContentesRef.current && toggleNavbar) {
      gsap.to(mobileNavContentesRef.current, {
        delay: 1.3,
        opacity: 1,
      });
    } else {
      gsap.to(mobileNavContentesRef.current, {
        opacity: 0,
      });
    }
    console.log(toggleNavbar);
  }, [toggleNavbar]);
  return (
    <div
      ref={mobileNavContentesRef}
      className="opacity-0 z-[9999999999] h-screen w-full  text-white fixed top-0 left-0"
    >
      <div className="h-full flex items-center gap-[1rem] flex-col justify-center">
        {navList.map((item, index) => {
          return (
            <p key={index} className="text-white text-[22px]">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default MobileViewNavContents;
