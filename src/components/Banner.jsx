import React, { useState, useEffect } from "react";
import banner1 from '../assets/banner/carousel1.jpg';
import banner2 from '../assets/banner/carousel2.jpg';
import banner3 from '../assets/banner/carousel3.jpg';

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const banners = [banner1, banner2, banner3];
  
    // Function to go to the next banner
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    // Function to go to the previous banner
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    };
  
    // Auto-slide functionality with useEffect
    useEffect(() => {
      const interval = setInterval(() => {
        handleNext();
      }, 2000); // Auto-slide every 5 seconds

      return () => clearInterval(interval); // Clean up the interval on unmount
    }, []);

    return (
      <div className="relative w-full max-w-screen-xl mx-auto" id="controls-carousel" data-carousel="static">
        {/* Image Container */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg mt-10">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute duration-300 ease-in-out w-full h-full ${
                activeIndex === index ? "block" : "hidden"
              }`}
              data-carousel-item={activeIndex === index ? "active" : ""}
            >
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="block w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
  
        {/* Previous Button */}
        <button
          type="button"
          className="absolute top-1/2 left-3 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 bg-white/70 hover:bg-white/90 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none sm:left-5"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>
  
        {/* Next Button */}
        <button
          type="button"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 bg-white/70 hover:bg-white/90 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none sm:right-5"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </div>
    );
};

export default Banner;
