import React from 'react'
import Logo from '../../assets/Or.png'
import { FaLocationArrow } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
      const address = "803 4th St suite 02-03, Orlando, FL 32824"

  const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

    return (
        <>
            <div className='bg-yellow-50 text-gray-700'>
                <div className='max-w-[1200px] mx-auto '>
                    <div className=''>
                        <div className='py-8 px-4'>
                            <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
                                <img src={Logo} alt="" className='max-w-[50px]' />
                               <span className='text-orange-400'>Orlando Xpress Tint</span> 
                            </h1>
                            <p className='text-2xl font-bold text-justify mt-2 sm:text-left'>
                               © 2025 Orlando Xpress Tint. All rights reserved.
Trusted experts in automotive, residential, and commercial window tinting.
We use high-quality materials to ensure maximum heat rejection, UV protection, and long-lasting performance.
Serving Orlando with precision and care.
                            </p>
                            <br />
                            <div className='flex gap-3 items-center  text-2xl font-bold'>
                                <FaLocationArrow className='text-orange-400 ' />
                                   <a href={mapUrl} target="_blank" rel="noopener noreferrer">
        Abrir en Google Maps
      </a>
                            </div>
                            <div className='flex  gap-3 items-center mt-3 text-2xl font-bold'>
                                <FaPhoneAlt className='text-orange-400' />
                                <p>407-603-6242</p>
                            </div>
                            {/*social handles*/}
                            <div >
                                <div className="flex items-center gap-3 mt-6">
                                    <a href="https://www.facebook.com/profile.php?id=61576893956119#">
                                        <FaFacebookF className='text-6xl text-orange-400' />
                                    </a>
                                    <a href="https://www.instagram.com/orlandoxpresstint/">
                                        <FaInstagram className='text-6xl text-orange-400' />
                                    </a>
                           
                                </div>
                            </div>
                        </div>
                   
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer