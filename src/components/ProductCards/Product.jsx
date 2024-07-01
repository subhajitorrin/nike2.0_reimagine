import React from 'react'
import './Product.css'
function Product(props) { 

  return (
   
    <>
    <div className="product"   style={{ backgroundImage: `url(${props.img})` }}>
    {/* <img className='BgShoeProductImg' src={val} alt=''></img> */}
        <span className='ProductHeading'>{props.name}</span>
        <span className='SeeMore'>See more</span>
    </div>
    </>
  )
}

export default Product