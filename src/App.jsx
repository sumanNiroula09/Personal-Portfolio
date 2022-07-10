import React from 'react'
import About from "./components/About/About"
import Header from "./components/Header/Header"
import Nav from './components/Nav/Nav'
import Experience from './components/Experience/Experience'
import Service from './components/Service/Service'
import Protfolio from './components/Protfolio/Protfolio'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from "./components/Contact/Contact"
import Footer from './components/Footer/Footer'
const App = () => {
  return (
   <>
   <Header />
   <Nav />
   <About />
   <Experience />
   <Service />
   <Protfolio />
   <Testimonial />
   <Contact />
   <Footer />
   </>
  )
}

export default App