import React from 'react'
import "./Nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiFillContacts} from 'react-icons/ai'
import {BiDetail} from 'react-icons/bi'
import {IoIosContact} from 'react-icons/io'

import { useState } from 'react'


const Nav = () => {
  const[activeNav, setActiveNav]= useState('#')

  return (
    <nav >
      <a href="#" onClick={()=>setActiveNav('#')}className={activeNav==="#" ? 'active' :' '}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')}  className={activeNav==="#about" ? 'active' :' '}><AiOutlineUser/></a>
      <a href="#experience"onClick={()=>setActiveNav('#experience')}  className={activeNav==="#experience" ? 'active' :' '}><BiBook/></a>
      <a href="#service"onClick={()=>setActiveNav('#service')}  className={activeNav==="#service" ? 'active' :' '}><RiServiceLine/></a>
      <a href="#portfolio"onClick={()=>setActiveNav('#portfolio')}  className={activeNav==="#portfolio" ? 'active' :' '}><BiDetail/></a>
      <a href="#contact"onClick={()=>setActiveNav('#contact')}  className={activeNav==="#contact" ? 'active' :' '}><IoIosContact/></a>
      <a href="#testimonial"onClick={()=>setActiveNav('#testimonial')}  className={activeNav==="#testimonial" ? 'active' :' '}><AiFillContacts/></a>
      
    </nav>
  )
}

export default Nav