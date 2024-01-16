import React, {useState, useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { Link, animateScroll as scroll } from 'react-scroll';
import home from '../assets/home.gif'
import about from '../assets/about.gif'
import work from '../assets/work.gif'
import resume from '../assets/resume.gif'
import contact from '../assets/contact.gif'
import Knowledge from '../assets/Knowledge.gif'
import './style.css'; 
const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-6 right-4 z-[99] md:hidden text-white'/>
        {
            nav?(
                <div className='fixed w-full h-screen bg-white/60 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} href="#main" className="w-[75%]  flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <img src={home} alt="Home GIF" className="w-7 h-7"/>
                        <span className='pl-4'>Home</span>
                    </a>

                    <a onClick={handleNav} href="#about" className="w-[75%]  flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <img src={about} alt="Home GIF" className="w-7 h-7"/>
                        <span className='pl-4'>About</span>
                    </a>

                    <a onClick={handleNav} href="#project" className="w-[75%]  flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <img src={Knowledge} alt="Home GIF" className="w-7 h-7"/>
                        <span className='pl-4'>Knowledge</span>
                    </a>

                    <a onClick={handleNav} href="#resume" className="w-[75%]  flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <img src={work} alt="Home GIF" className="w-7 h-7"/>
                        <span className='pl-4'>Project</span>
                    </a>

                    <a onClick={handleNav} href="#contact" className="w-[75%]  flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <img src={contact} alt="Home GIF" className="w-7 h-7"/>
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            ):(
                '' 
            ) 
        }
        <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
                <Link to="main" smooth={true} duration={500} className='rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <img src={home} alt="Home GIF" className="w-7 h-7"/>
                </Link>
                <Link to="about" smooth={true} duration={500} className='rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <img src={about} alt="About GIF" className="w-7 h-7"/>
                </Link>
                <Link to="project" smooth={true} duration={500} className='rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <img src={Knowledge} alt="Project GIF" className="w-7 h-7"/>
                </Link>
                <Link to="resume" smooth={true} duration={500} className='rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <img src={work} alt="Resume GIF" className="w-7 h-7"/>
                </Link>
                <Link to="contact" smooth={true} duration={500} className='rounded-full shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <img src={contact} alt="Contact GIF" className="w-7 h-7"/>
                </Link>
            </div>
        </div> 
    </div>
  )
}


export default Sidenav