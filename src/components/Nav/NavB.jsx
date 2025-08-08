import React from 'react'
import logo from '../../assets/Or.png';
const NavB = () => {
  return (

   
    < div className='bg-white '>
        <div className='container '>
            <div className='flex  justify-between items-center'>
                <div className='flex text-white gap-4 text-7xl items-center font-bold '>
                   <img src={logo} alt="" className='w-20' />
              
                </div>
                  <div className='text-orange-400 flex items-center gap-4'>
                  <ul className='flex items-center gap-6 text-xl py-4 sm:py-0'>
     
                    <li className="inline-block border-b-2 border-transparent hover:border-orange-500 hover:text-black cursor-pointer">
  About Us
</li>
                    <li className="inline-block border-b-2 border-transparent hover:border-orange-500 hover:text-black cursor-pointer">
  Contact
</li>
                    
                    
                  </ul>                 
                </div>
            </div>

        </div>
    </div>
  )
}

export default NavB