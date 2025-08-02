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

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    })
  }, [])

  return (
    <div className="overflow-x-hidden">
      {/* Sección con fondo responsivo */}
      <div className="relative min-h-screen">
        {/* Imagen de fondo */}
        <div
  className="absolute inset-0 bg-center z-0 
             bg-[length:100%_100%] sm:bg-cover"
  style={{ backgroundImage: `url(${bg})` }}
>
  <div className="absolute inset-0 bg-black opacity-40"></div>
</div>
        {/* Contenido encima del fondo */}
        <div className="relative z-10">
          <Nav />
          <Hero />
        </div>
      </div>

      <ServicesCards />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  )
}


export default App
