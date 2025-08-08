import React from 'react'
import img1 from '../../assets/or3.jpg'
import img2 from '../../assets/or1.jpg'
import img3 from '../../assets/or2.jpg'
import img4 from '../../assets/or4.jpg'
import img5 from '../../assets/or5.jpg'
import img6 from '../../assets/or6.jpg'

const Gaaleria = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="bg-black py-12 z-[50] relative" data-aos="fade-up" data-aos-delay="100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 bg-white"
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gaaleria;
