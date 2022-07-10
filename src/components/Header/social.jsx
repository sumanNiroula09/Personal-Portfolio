import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"

const social = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com"  ><BsLinkedin /></a>
        <a href="https://github.com/suman908"><AiFillGithub/></a>
        <a href="https://facebook.com" ><AiFillFacebook/></a>

    </div>
  )
}

export default social