import React from 'react';
import './style.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaInstagram, FaGithub, FaFacebookF} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import logo from '../assets/logo.png';

function Footer() {  
  return ( 
    <div className='max-x-[1040px] m-auto relative bg-gradient-to-r from-gray-800 to-black'>
      <div className="border-b border-solid line-color w-full"></div>
      <div className='grid md:grid-cols-3 grid-cols-1 p-3'>
        <div className=''>
        <Link to="main" smooth={true} duration={500}>
          <img src={logo} className="cursor-pointer md:w-36 md:h-14 w-30 h-10 mx-auto block md:ml-0" alt="Logo" />
        </Link>
          <p className='text-white md:text-xs text-xxs  text md:ml-5 text-center md:text-start'>@2024 Roger Cruz. All Rights Reserve</p>
        </div>
        <div className='text-center md:pt-4 pt-2 text-white'>
          <Link to="main" smooth={true} duration={500} className='pl-4 cursor-pointer font-semibold bg-gradient-to-r from-white to-white hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-transparent bg-clip-text'>Home</Link>
          <Link to="about" smooth={true} duration={500} className='pl-4 cursor-pointer font-semibold bg-gradient-to-r from-white to-white hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-transparent bg-clip-text'>About</Link>
          <Link to="project" smooth={true} duration={500} className='pl-4 cursor-pointer font-semibold bg-gradient-to-r from-white to-white hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-transparent bg-clip-text'>Project</Link>
          <Link to="resume" smooth={true} duration={500} className='pl-4 cursor-pointer font-semibold bg-gradient-to-r from-white to-white hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-transparent bg-clip-text'>Resume</Link>
          <Link to="contact" smooth={true} duration={500} className='pl-4 cursor-pointer font-semibold bg-gradient-to-r from-white to-white hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-transparent bg-clip-text'>Contact</Link>
        </div>
        <div className='flex flex-row md:justify-end justify-center text-white md:pt-4 pt-2 '>
          <a href="https://twitter.com/RogerCruz123321">
            <FaXTwitter className='ml-4 md:h-6 md:w-6 h-4 w-4' />
          </a>
          
          <a href="https://www.facebook.com/rogerray.cruz">
            <FaFacebookF className='ml-4 md:h-6 md:w-6 h-4 w-4' />
          </a>

          <a href="https://www.instagram.com/_.k_i_z_u._/">
            <FaInstagram className='ml-4 md:h-6 md:w-6 h-4 w-4 ' />
          </a>
          <a href="https://github.com/Kizu17">
            <FaGithub className='ml-4 md:h-6 md:w-6 h-4 w-4' />
          </a>
        </div>
      </div>
    </div> 
  );
}

export default Footer;