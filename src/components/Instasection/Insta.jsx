import React, { useState, useEffect } from 'react';
import './Insta.css';
import img1 from '../../assets/MovingCards/card1.jpg';
import img2 from '../../assets/MovingCards/card2.jpg';

const Insta = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='Insta-secContainer'>
      <div className='insta' >
        <div className='cards img1'>
          <img src={img1} alt='Card 1' />
        </div>
        <div className='cards img2'>
          <img src={img1} alt='Card 2' />
        </div>
        <div className='cards img3'>
          <img src={img2} alt='Card 3' />
        </div>
        <div className='cards img4'>
          <img src={img1} alt='Card 4' />
        </div>
        <div className='cards img5' >
          <img src={img1} alt='Card 5' />
        </div>
      </div>
    </div>
  );
};

export default Insta;