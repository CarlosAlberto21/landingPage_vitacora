import React from 'react'
import Bosque from '../../assets/window2.webp'
const Banner2 = () => {
  return (
      <div className='bg-black text-yellow-400 pb-12 relative z-50'>
          <div className='container'
                 data-aos="fade-right"  // ← Aquí está la animación
  data-aos-delay="100">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center p-4'> 
               
                <div className='space-y-3 xl:pr-36 p-8 border-l-4 border-b-2 border-orange-100
            '>
                  
                  <h1 className='uppercase text-5xl'>Vision</h1>
                  <p>Our vision is to become the leading window tinting company in our region, recognized for our innovation, reliability, and excellence. We aim to set the standard in the industry by combining advanced technology, skilled craftsmanship, and a dedication to improving energy efficiency and personal comfort.</p>
                    
                </div>
                <div className=''>
                  <img src={Bosque} alt=""/>
                </div>
            </div>
          </div>
        </div>
  )
}

export default Banner2