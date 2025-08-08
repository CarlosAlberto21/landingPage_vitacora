import React from 'react'
import bg from '../../assets/neddTitn.png'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp  } from 'react-icons/fa'
import oxp from '../../assets/Oxp.png'

const Hero = () => {
  return (
    <div className="bg-black h-full text-white relative z-40">
<div className="relative bg-[#FCFF3B] w-full px-4 py-3 flex flex-col items-center justify-center sm:flex-row sm:justify-end sm:h-28">
  {/* Texto centrado */}
  <div className="text-center px-2 max-w-full mb-3 sm:mb-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black truncate">
      THE BEST PRICE IN ORLANDO
    </p>
  </div>

  {/* Íconos (centrados abajo en móvil, a la derecha en desktop) */}
  <div className="flex gap-3 sm:ml-auto sm:items-center">
    <a href="https://www.facebook.com/profile.php?id=61576893956119#" target="_blank" rel="noopener noreferrer">
      <FaFacebookF className="text-2xl sm:text-3xl lg:text-4xl text-black" />
    </a>
    <a href="https://www.instagram.com/orlandoxpresstint/" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-2xl sm:text-3xl lg:text-4xl text-black" />
    </a>
    <a href="https://wa.me/14076036242?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="text-2xl sm:text-3xl lg:text-4xl text-black" />
    </a>
  </div>
</div>


        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center p-4'> 
                     
                      <div className='space-y-3 xl:pr-36 p-8 border-l-4 border-b-2 border-[color:#FCFF3B]
                  '>
                    <div className='bg-[color:#FCFF3B] '>
                        <img src={oxp} alt="" className=''/>
                    </div>
                    
                          
                      </div>
                      <div className=''>
                        <img src={bg} alt=""/>
                      </div>
                  </div>
   
    </div>
  )
}


export default Hero