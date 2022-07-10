import React from 'react'
import CTA from "./CTA"
import ME from "../../assets/mee.png"
import HeaderSocical from "./social"
import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Suman</h1>
          <h5 className="text-light">Fullstack Developer</h5>
         
        <CTA />
        <HeaderSocical />

        <div className="me">
          <img src={ME} alt="me" className='imga'/>
        </div>


    <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
    
    </header>
  )
}

export default Header