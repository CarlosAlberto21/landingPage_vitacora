import React from 'react'
import Bosque from '../../assets/bosque.png'
const Banner2 = () => {
  return (
      <div className='bg-white text-lime-600 pb-12 relative z-50'>
          <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center p-4'> 
               
                <div className='space-y-3 xl:pr-36 p-8 border-l-4 border-b-2 border-lime-700
               hover:bg-gradient-to-b
               hover:from-lime-200 
            hover:via-lime-100 hover:to-lime-50 
            hover:text-green-400 transition-all duration-500'>
                  <p className='text-lime-500 uppercase'> Nuestra Mission</p>
                  <h1 className='uppercase text-5xl'>Fauna</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam consequuntur 
                    modi reiciendis 
                    unde adipisci corrupti optio quos, aliquam a doloribus! Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Illo maxime adipisci earum inventore aspernatur sint dignissimos beatae vitae possimus nobis vel velit, 
                    tempora doloribus laborum corporis magnam, eius expedita incidunt.</p>
                    
                </div>
                <div>
                  <img src={Bosque} alt="" />
                </div>
            </div>
          </div>
        </div>
  )
}

export default Banner2