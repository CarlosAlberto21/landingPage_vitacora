import React from 'react'

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-40">
        <div className="h-full flex justify-center items-center px-4">
            <div className="container  grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <div className='space-y-4 lg:pg-36'>
                    <h1 className="text-5xl font-bold uppercase">
                        Vienvenidos a vitacoras!
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fuga corporis sunt quo nostrum excepturi aut ratione quisquam reprehenderit! Suscipit?</p>
                    <button className='bg-lime-400 text-white  px-4 hover:bg-lime-500 rounded-md  py-2 border-2 border-lime-400    '>
                    Explora
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Hero