import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollableContent = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const headings1Ref = useRef(null);
  const headings2Ref = useRef(null);
  const headings3Ref = useRef(null);

  const text = "DOMINANT THE SUMMITS SUMMITS".split(" ");
  const subject = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus cupiditate maxime inventore magni illum dolores corrupti, eveniet aliquam aliquid tempora quas? Quibusdam quas est neque nemo ratione, ad iusto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quis dicta, deleniti nihil laborum consequuntur voluptatum error dolorem animi itaque? ....".split(" ");

  useEffect(() => {
    
  }, []);

  return (
    <div className="bg-transparent pt-screen relative">
      <section ref={section1Ref} className="h-screen p-8 relative">
        <div className='absolute top-[10%] left-0 px-10'>
          <div ref={headings1Ref} className='headings1'>
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
      <section ref={section1Ref} className="h-screen p-8 relative">
        <div className='absolute top-[10%] right-0 px-10'>
          <div ref={headings1Ref} className='headings1'>
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
      <section ref={section1Ref} className="h-screen p-8 relative">
        <div className='absolute bottom-[10%] left-0 px-10'>
          <div ref={headings1Ref} className='headings1'>
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