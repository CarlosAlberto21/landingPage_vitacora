import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import img2 from '../../assets/rw.png';
import img3 from '../../assets/rw2.png';
import img1 from '../../assets/rw3.png';
import img5 from '../../assets/rw4.png';
import img4 from '../../assets/rw5.png';
import img6 from '../../assets/rw7.png';

const testimonialData = [
  { id: 1, name: "Carlos", job: "CEO", text: "Lorem ipsum dolor sit amet", img: img1 },
  { id: 2, name: "Ginna", job: "Designer", text: "Lorem ipsum dolor sit amet", img: img2 },
  { id: 3, name: "Paris", job: "Developer", text: "Lorem ipsum dolor sit amet", img: img3 },
  { id: 4, name: "Carlos", job: "CEO", text: "Lorem ipsum dolor sit amet", img: img4 },
  { id: 5, name: "Ginna", job: "Designer", text: "Lorem ipsum dolor sit amet", img: img5 },
  { id: 6, name: "Paris", job: "Developer", text: "Lorem ipsum dolorykyu", img: img6 },
];

const Testimonial = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(1);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className='bg-gradient-to-t from-white to-yellow-500 py-10'>
      <div>
        <div data-aos="zoom-in" data-aos-duration="300" className='max-w-full mx-auto px-4'>
          <Slider {...settings}>
            {testimonialData.map(({ id, name, text, img }) => (
              <div key={id} className='my-6'>
                <div className='flex items-center justify-center flex-col gap-4 text-center bg-primary/10 relative p-4'>
                  <img src={img} alt={name} className='w-full h-full object-cover' />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-center mt-8">
          <a
            href="https://share.google/tRtWo2MxcQXcXrKY2"
            className="inline-block px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
          >
            LEAVE A REVIEW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
