import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const ScrollableContent = () => {
  const containerRef = useRef(null);
  const childRef1 = useRef(null);
  const childRef2 = useRef(null);

  const text = "DOMINANT THE SUMMITS SUMMITS".split(" ");
  const subject = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus cupiditate maxime inventore magni illum dolores corrupti, eveniet aliquam aliquid tempora quas? Quibusdam quas est neque nemo ratione, ad iusto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quis dicta, deleniti nihil laborum consequuntur voluptatum error dolorem animi itaque? ....".split(" ");

  useGSAP(() => {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          end: 'top 10%',
          scrub: 5,
          scroller: containerRef.current, // specify the container as the scroller
        },
      });
      gsap.from('.headings1 h2', {
        opacity: 0,
        y: 50,
        stagger: {
          amount: 1, // adjust the amount of stagger time
        },
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: childRef1.current,
          start: 'top 90%',
          end: 'top 50%',
          scrub: true,
          markers: true,
        },
      });
      gsap.from('.headings2', {
        opacity: 0,
        y: 50,
        stagger: {
          amount: 1, // adjust the amount of stagger time
        },
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: childRef2.current,
          start: 'top 90%',
          end: 'top 20%',
          scrub: 5,
        },
      });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-transparent pt-screen relative border-2 border-red-900">
      <section className="h-screen p-8 relative animated-section">
        <div className='absolute top-[10%] left-0 px-10 border-4 opacity-1' ref={childRef1}>
          <div className='headings1'>
            <h2 className="text-2xl font-bold mb-4">
              DOMINANT THE SUMMITS SUMMITS
            </h2>
            <h2 className="text-4xl font-bold mb-4">
              DOMINANT THE SUMMITS SUMMITS
            </h2>
          </div>
          <p className='w-[30rem]'>
            {subject.map((el, index) => (
              <span key={index}>{el} </span>
            ))}
          </p>
        </div>
      </section>
      <section className="h-screen p-8 relative">

      </section>
      <section className="h-screen p-8 relative">

      </section>
      <section className="h-screen p-8 relative animated-section" ref={childRef2}>
        <div className='absolute bottom-[60%] right-0 ml-[2rem] border-4 opacity-1'>
          <div className='headings2'>
            <h2 className="text-2xl font-bold mb-4">
              {text.map((el, index) => (
                <span key={index}>{el} </span>
              ))}
            </h2>
            <h2 className="text-4xl font-bold mb-4">
              {text.map((el, index) => (
                <span key={index}>{el} </span>
              ))}
            </h2>
          </div>
          <p className='w-[30rem]'>
            {subject.map((el, index) => (
              <span key={index}>{el} </span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ScrollableContent;