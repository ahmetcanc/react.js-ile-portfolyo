import React from "react"
import {Link} from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='toggleButton'> 
    
      </div>
      <div className='links'>
            <Link to="/"> ANA SAYFA </Link>
            <Link to="/projects"> PROJELER </Link>
            <Link to="/experiance"> DENEYİM </Link>
      </div>
    </div>
  )
}

export default Navbar; 
