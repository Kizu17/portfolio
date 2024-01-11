import React from 'react';
import Testimonial from './Testimonial';

function Resume() { 
  return (
    <div id='resume' className='max-x-[1040px] m-auto md:pl-20 p-4 py-16 relative bg-gradient-to-r from-gray-800 to-black' style={{ backgroundColor: '#292930' }}>
      <div className='flex flex-col items-center justify-center text-color m-6 '>
      <h6 className='text-gold lg:mt-28 m-0 md:text-xl text-lg'>Explore My Work</h6>
        <h1 className='md:text-3xl text-2xl font-bold mt-2'>Discover my creations – see what I've made.</h1>
        <h5 className='md:text-lg text-md text-color text-center mb-10 mt-4  lg:mr-56 lg:ml-56'>I create digital art and websites that blend creativity with functionality. Explore my work and witness the fusion of design and innovation.</h5>
      </div>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 gap-2 justify-items-center relative z-10'>
            <div className='bg-gradient-to-r from-gray-800 to-black h-48 w-80 shadow-xl rounded-lg'>1111111111</div>
            <div className='bg-gradient-to-r from-gray-800 to-black h-48 w-80 shadow-xl rounded-lg'>111111s</div>
            <div className='bg-gradient-to-r from-gray-800 to-black h-48 w-80 shadow-xl rounded-lg'>1</div>
            <div className='bg-gradient-to-r from-gray-800 to-black h-48 w-80 shadow-xl rounded-lg'>1</div>
            <div className='bg-gradient-to-r from-gray-800 to-black h-48 w-80 shadow-xl rounded-lg'>1</div>
            <div className='bg-gradient-to-r from-gray-800 to-black h-48 w-80 shadow-xl rounded-lg'>1</div>
          </div>
          <Testimonial/>
      </div>
  );
}

export default Resume;