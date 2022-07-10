import React from 'react'
import "./portfolio.css";

import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"


const Protfolio = () => {
  return (
    <section id='portfolio'>

      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>

      <div className="container protfolio__container">
        <article className='protfolio__item'>
          <div className="protfolio__item-image">
            <img src={IMG1} alt=" "/>
             </div>
            <h3>Crypto Currency Dashboard</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className='btn'> Github</a>
          <a href="https://dribble.com/Alex_pixels" target="_blank" className='btn btn-primary'> Live Demo</a>
            </div>
        </article>

        <article className='protfolio__item'>
          <div className="protfolio__item-image">
            <img src={IMG2} alt=" "/>
             </div>
            <h3>Charts templates and infographics in figma</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className='btn'> Github</a>
          <a href="https://dribble.com/Alex_pixels" target="_blank" className='btn btn-primary'> Live Demo</a>
            </div>
        </article>

        <article className='protfolio__item'>
          <div className="protfolio__item-image">
            <img src={IMG3} alt=" "/>
             </div>
            <h3>Figma Dashboard UI kit for design web apps</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className='btn'> Github</a>
          <a href="https://dribble.com/Alex_pixels" target="_blank" className='btn btn-primary'> Live Demo</a>
            </div>
        </article>

        <article className='protfolio__item'>
          <div className="protfolio__item-image">
            <img src={IMG4} alt=" "/>
             </div>
            <h3>Maintaing tasks and tracking progress</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className='btn'> Github</a>
          <a href="https://dribble.com/Alex_pixels" target="_blank" className='btn btn-primary'> Live Demo</a>
            </div>
        </article>

        <article className='protfolio__item'>
          <div className="protfolio__item-image">
            <img src={IMG5} alt=" "/>
             </div>
            <h3>Charts templates and Infographics in figma</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className='btn'> Github</a>
          <a href="https://dribble.com/Alex_pixels" target="_blank" className='btn btn-primary'> Live Demo</a>
            </div>
        </article>

        <article className='protfolio__item'>
          <div className="protfolio__item-image">
            <img src={IMG6} alt=" "/>
             </div>
            <h3>harts templates and Infographics in figma</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className='btn'> Github</a>
          <a href="https://dribble.com/Alex_pixels" target="_blank" className='btn btn-primary'> Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Protfolio