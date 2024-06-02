import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
   <div className='navContainer'>
      <nav>
        <div className="nav-left">
          <li>Find a Store</li>
          <li>Help</li>
        </div>
        <div className="nav-right">
          <li>Join Us</li>
          <li>Sign In</li>
        </div>
      </nav>
   </div>
  )
}

export default Navbar