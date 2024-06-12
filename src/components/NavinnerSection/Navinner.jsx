import React, { useEffect, useRef } from 'react'
import "./Navinnrt.css"
import { IoIosArrowDropright } from "react-icons/io";
const Navinner = () => {
    const arrowiconref = useRef(null);
    function handelside(){
        
    }
  return (
    <div className='NavinnerContainer'>
        <div className="navinner-left">
        <IoIosArrowDropright className='arrowicon' ref={arrowiconref}/>
        </div>
        <div className="navinner-right">
            koi re vaipo
        </div>
        <div className="navinner-middle">
            koi re vaipo
        </div>
       
    </div>
  )
}

export default Navinner