import React from 'react'
import { FaReact } from 'react-icons/fa'
import { FaShuttleSpace, FaSpaceAwesome } from 'react-icons/fa6'
import { GiPlantsAndAnimals, GiPlantSeed } from 'react-icons/gi'
import { PiNuclearPlant } from 'react-icons/pi'
import img1 from '../../assets/CNegro.png'
import bgVideo from '../../assets/carro.mp4'
import img2 from '../../assets/carro3s.png'
import img3 from '../../assets/camioneta.png'
import { IoFitnessSharp } from "react-icons/io5";

const ServiceData = [
    {
    title: "FLORA",
    content: "CUIDAR" ,
    description: "Used for astronomical observations capturing stunning images of the universe",
    icon: img1 ,
    aosDeplay: "300",

    },

    {
        title: "FAUNA",
        content: "PROTEJER" ,
        description: "Used for astronomical observations capturing stunning images of the universe",
        icon: img1,
        aosDeplay: "500",
        
        },

        {
            title: "AMBIENTE",
            content: "SANAR" ,
            description: "Used for astronomical observations capturing stunning images of the universe",
            icon: img1,
            aosDeplay: "700",
            
            }
]

const Services = () => {
  return (
    <div className='bg-black py-8 z-[50] relative'
           data-aos="fade-up"  // ← Aquí está la animación
  data-aos-delay="100">
        
            <h1 className='text-8xl xl:text-5xl font-bold text-orange-500 text-center mb-3.5'>Services</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 
            lg:grid-cols-3 gap-8 ml-4 px-5'>

                <div className='py-10 p-5 bg-gradient-to-br from-yellow-300 to-orange-400 
                text-white rounded-3xl relative h-[320px] flex items-center 
                transition-transform duration-300 ease-in-out transform hover:scale-105'>
                    <div>
                        <div className='mb-4'>
                           
                            <p className='text-2xl xl:text-5xl text-black font-bold'>Carbon</p>
                        </div>
                    </div>
                    <img src={img1} alt="" className='w-[220px] absolute
                    bottom-30 right-0 
                  '/>
                </div>

                <div className='py-10 pl-5 bg-gradient-to-br from-yellow-300 to-orange-400 
                text-white rounded-3xl relative h-[320px] flex items-center 
                transition-transform duration-300 ease-in-out transform hover:scale-105'>
                    <div>



                        <div className='mb-4'>
                            
                            <p className='text-2xl xl:text-5xl text-black  font-bold'> Ceramic</p>
                        </div>
                    </div>
                    <img src={img3} alt="" className='w-[175px] absolute
                    bottom-30 right-3'/>
                </div>

                <div className='py-10 pl-5 bg-gradient-to-br from-yellow-300 to-orange-400 
                text-white rounded-3xl relative h-[320px] flex items-center 
                transition-transform duration-300 ease-in-out transform hover:scale-105'>
                    <div>
                        <div className='mb-4'>
                            
                            <p className='text-2xl xl:text-5xl text-black  font-bold'>Hiper</p>
                            <p className='text-2xl xl:text-5xl text-black  font-bold'>Ceramic</p>

                        </div>
                         <img src={img2} alt="" className='w-[220px] absolute
                    bottom-10 right-0'/>
                    </div>
                    
                </div>
        
            </div>
            
     
        </div>



    
  )
}

export default Services