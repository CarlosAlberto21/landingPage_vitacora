import React from 'react'
import bgVideo from './assets/Hawaii.mp4'
import Nav from './components/Nav/NavB'
import Hero from './components/Hero/Hero'
import ServicesCards from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
   <div>
     <div className= 'h-[700px] relative'>
      <video 
      className='fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]
      '
      autoPlay muted loop>
        <source  src={bgVideo} type="video/mp4"/>
      </video>
        <Nav/>  
        <Hero/>
    </div>
    <ServicesCards/>
    <Banner/>
    <Banner2/>
    <Footer/> 
   </div>
  )
}

export default App
