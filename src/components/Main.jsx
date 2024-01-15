import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaGithub, FaFacebookF} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';
import mainPic from '../assets/mainPic.png';
import bg from '../assets/bg.jpg'

function Main() {
  return (
    <div id='main' className='' >
      <div className='w-full h-screen relative' >
        <img className='w-full h-full object-cover' src={bg} alt="bg" />
        <div className='absolute bottom-0 left-0 right-0' > </div>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-60'></div>
         
      </div>

 
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className='w-full h-screen absolute top-0 left-0'
      >
        <div className='max-x-[700px] m-auto h-full flex flex-col justify-center items-center'>
          <img src={mainPic} alt="" style={{ zIndex: 1 }} />
          <h1 className='text-color sm:text-5xl text-4xl font-bold'>I'm Roger Ray Cruz</h1>
          <h2 className='text-color flex sm:text-3xl text-2xl pt-4'>I'm a
            <TypeAnimation
              sequence={[
                'Student',
                1000,
                'Front End Developer',
                2000,
                'Programmer',
                1000,
                'Designer',
                1000,
                'Digital Artist',
                2000
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href="https://twitter.com/RogerCruz123321">
              <FaXTwitter className='cursor-pointer text-white' size={20}/>
            </a>
            <a href="https://www.facebook.com/rogerray.cruz">
              <FaFacebookF className='cursor-pointer text-white' size={20}/>
            </a>
            <a href="https://www.instagram.com/_.k_i_z_u._/">
              <FaInstagram className='cursor-pointer text-white' size={20}/>
            </a>
            <a href="https://github.com/Kizu17">
              <FaGithub className='cursor-pointer text-white' size={20}/>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Main;
