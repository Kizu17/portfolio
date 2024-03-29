import React from 'react';
import Testimonial from './Testimonial';
import AnimatedShape  from '../assets/AnimatedShape.svg';
import Bakery from  '../assets/Bakery.png';
import Art from  '../assets/Art.png';
import Ecommerce from  '../assets/Ecommerce.png';
import Service from  '../assets/Service.png';
import phpWebsite from '../assets/phpWebsite.png';
function Resume() { 
  return (
    <div id='resume' className='max-x-[1040px]  relative bg-gradient-to-r from-gray-800 to-black' style={{ backgroundColor: '#292930' }}>
      <div  style={{
        backgroundImage: `url(${AnimatedShape})`,
        backgroundSize: 'cover',
      }}>
        <div className='m-auto md:pl-20 p-4 '>
          <div className='flex flex-col items-center justify-center text-center text-color m-6 '>
            <h6 className='text-gold m-0 md:text-xl text-lg mt-4'>Explore My Work</h6>
              <h1 className='md:text-3xl text-2xl font-bold mt-2'>Discover my creations – see what I've made.</h1>
              <h5 className='md:text-lg text-md text-color text-center mb-6 mt-4  lg:mr-56 lg:ml-56'>I create digital art and websites that blend creativity with functionality. Explore my work and witness the fusion of design and innovation.</h5>
          </div>

            <div className="grid md:grid-rows-2 md:grid-cols-4 grid-cols-2  gap-4 md:mr-16 md:ml-16 mr-8 ml-8 ">
              <div className="row-span-2 col-span-2">
                <a href="https://www.canva.com/design/DAFbHUJyQtg/mlPsLACqRLkHO2OdX8gP_A/view?utm_content=DAFbHUJyQtg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
                  <img src={Art} alt="" className='rounded-md w-full h-full object-cover group-hover:opacity-10'/>
                </a>
              </div>

              <div className="col-span-2 bg-color">
                <a href="https://drive.google.com/file/d/1qd7IO6FM3tYAj1dY8yBut-U1Cm5JiEsB/view?usp=sharing">
                  <img src={Service} alt="" className='rounded-md w-full h-full object-cover' />
                </a>
              </div>

              <div className="col-span-2 bg-color">
                <a href="https://drive.google.com/file/d/1tWQRGhN0ua7BbC391ahqCz_Oe_aNJLuH/view?usp=sharing">
                  <img src={Ecommerce} alt="" className='rounded-md w-full h-full object-cover' />
                </a>
              </div>    
            </div>
            
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:mt-8 md:mr-16 md:ml-16 mr-8 ml-8'>
              <div className='bg-color'>
                <a href="https://drive.google.com/file/d/1QCfxtQRl1wQuhsGrGJDikqKh37EiQjiC/view?usp=sharing">
                  <img src={Bakery} alt="" className='rounded-md w-full h-full object-cover' />
                </a>
              </div>

              <div className='bg-color'>
                <a href="https://drive.google.com/file/d/1q-TFUyhLiFVJfjgt04ivntGrMjC7v2yi/view?usp=sharing">
                  <img src={phpWebsite} alt="" className='rounded-md w-full h-full object-cover'/>
                </a>
              </div>
            </div>
            <Testimonial/>
        </div>
      </div>
    </div>
  );
}

export default Resume;