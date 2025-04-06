import React from 'react'
import logo from '../../assets/logo.png';
const NavB = () => {
  return (
    < div className='fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-sm
    py-4 sm:py-4 '>
        <div className='container '>
            <div className='flex  justify-between items-center'>
                <div className='flex text-white gap-4 text-2xl items-center font-bold '>
                   <img src={logo} alt="" className='w-20' />
                   <span>Vitacoras</span>
                </div>
                <div className='text-white flex items-center gap-4'>
                  <ul className='flex items-center gap-6 text-xl py-4 sm:py-0'>
                    <li className='hover:text-green-400  cursor-pointer '>Menu</li>
                    <li className='hover:text-green-400  cursor-pointer'>Sobre Nosotros</li>
                    <li className='hover:text-green-400  cursor-pointer'>Contacto</li>
                    
                    
                  </ul>                 
                </div>
            </div>

        </div>
    </div>
  )
}

export default NavB