import React from 'react'
import {BiCheck} from "react-icons/bi"
import "./service.css"

const Service = () => {
  return (
    <section id='service'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* End of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Service