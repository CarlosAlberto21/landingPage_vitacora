import React from 'react'
import bg from './assets/neddTitn.png'
import Nav from './components/Nav/NavB'
import Hero from './components/Hero/Hero'
import ServicesCards from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Footer from './components/Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Contacto from './components/Contacto/Contacto'
import Testimonial from './components/Testimonial/Testimonial'
import Gps from './components/Gps/Gps'
import Gaaleria from './components/Galeria/Gaaleria'

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    })
  }, [])

  return (
    <div className="overflow-x-hidden bg-black">

        {/* Contenido encima del fondo */}
        <div className="relative z-10">
          <Nav />
          
      
          <Hero />
        </div>
      

      <ServicesCards />
      <Banner />
      <Banner2 />
      <Contacto/>
      
      <Testimonial/>
      
      <Gps/>
      <Gaaleria/>
      <Footer />
    </div>
  )
}


export default App
