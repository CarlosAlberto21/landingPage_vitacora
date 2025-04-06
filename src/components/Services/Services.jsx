import React from 'react'
import { FaReact } from 'react-icons/fa'
import { FaShuttleSpace, FaSpaceAwesome } from 'react-icons/fa6'
import { GiPlantsAndAnimals, GiPlantSeed } from 'react-icons/gi'
import { PiNuclearPlant } from 'react-icons/pi'
const ServiceData = [
    {
    title: "FLORA",
    content: "CUIDAR" ,
    description: "Used for astronomical observations capturing stunning images of the universe",
    icon: <GiPlantSeed className = "text-7xl" /> ,
    aosDeplay: "300",

    },

    {
        title: "FAUNA",
        content: "PROTEJER" ,
        description: "Used for astronomical observations capturing stunning images of the universe",
        icon: <GiPlantsAndAnimals className = "text-7xl" />, 
        aosDeplay: "500",
        
        },

        {
            title: "AMBIENTE",
            content: "SANAR" ,
            description: "Used for astronomical observations capturing stunning images of the universe",
            icon: <PiNuclearPlant  className = "text-7xl" /> ,
            aosDeplay: "700",
            
            }
]

const Services = () => {
  return (
    <div className='bg-white   text-lime-600  z-[50]'>
        <div className='container'>
            <div className='min-h-[400px]'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10'>

                    {
                        ServiceData.map(
                            (data,index ) => (
                                <div className='min-h-[180px] flex flex-col gap-2 justify-center items-center rounded-xl
                                bg-white text-center backdrop-blur-sm py-8 px-3 w-full lg:w-[300px] border-r-2 border-b-2 border-lime-700 border-l-2
                                mx-auto hover:bg-gradient-to-b hover:from-lime-50 hover:via-lime-100 hover:to-lime-200 hover:text-green-400 transition-all duration-500' >
                                   {data.icon}
                                    <h1>{data.title}</h1>
                                    <p>{data.content}</p>
                                    <p className=''>{data.description}</p>
                                </div>
                            
                            )
                        )
                    }

                </div>
            </div>
        </div>
    </div>
  )
}

export default Services