import React from 'react';
import fondo from '../../assets/image.png';

const Gps = () => {
    const address = "803 4th St suite 02-03, Orlando, FL 32824"

  const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  return (
    <div className="bg-black flex flex-col items-center justify-center py-8 px-4">
      <h1 className="text-4xl md:text-5xl text-orange-500 font-bold text-center mb-4">
     <span className='text-white'>Orlando</span>    Xpress <span className='text-white'>Tint</span> 
  </h1>
      <div className="w-full flex justify-center">
        <img
          src={fondo}
          alt="Imagen fondo"
          className="w-64 sm:w-80 md:w-[400px] object-contain"
        />
      </div>
   <a
  href={mapUrl}
  className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-500 transition duration-300 mt-8"
>
  ORLANDO SERVICES
</a>

<p className='text-white'>
  or call{' '}
  <a href="tel:4076036242" className='text-orange-500 hover:underline'>
    (407)-603-6242
  </a>
</p>
    </div>
  );
};

export default Gps;

