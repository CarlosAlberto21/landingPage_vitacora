import React from 'react'
import Bosque from '../../assets/window.webp'
import bgVideo from '../../assets/carro.mp4'

const Banner = () => {
  return (
    <div className='bg-black text-yellow-400 pb-12 relative z-50'>
                    <video 
      className='=absolute right-0 top-0 h-[700px] w-full object-cover z-[-1] '
       autoPlay
    muted
    loop
    playsInline>
        <source  src={bgVideo} type="video/mp4"/>
      </video>
   
      <div className='container'
       data-aos="fade-left"  // ← Aquí está la animación
  data-aos-delay="100">
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center p-4'> 
            <div>
              <img src={Bosque} alt="" />
            </div>
            <div 
  className='space-y-4 xl:pr-36 p-8 border-r-2 border-b-2 border-orange-100
         '
 
>
           
              <h1 className='uppercase text-5xl'>Mission</h1>
              <p>Our mission is to provide high-quality window tinting solutions that enhance comfort, privacy, and protection for vehicles, homes, and businesses. We are committed to delivering exceptional service, using premium materials and professional installation to ensure long-lasting results and customer satisfaction.</p>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner