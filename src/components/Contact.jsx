import React from 'react'
import './style.css';
import { FaInstagram, FaGithub, FaFacebookF, FaPhoneAlt} from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import AnimatedShape  from '../assets/AnimatedShape.svg';
const Contact = () => {
  return (
    <div id='contact' className='max-x-[1040px]   relative bg-gradient-to-r from-gray-800 to-black '>
      <div  style={{
        backgroundImage: `url(${AnimatedShape})`,
        backgroundSize: 'cover',
        height: '100%',
        width: '100%'
      }}> 
      <div className='m-auto p-4 md:pl-20 py-16'>
        <div className='text-color relative text-center lg:mr-64 lg:ml-64 ml-4 mr-4'>
            <h6 className='text-gold md:mt-10 m-0'>Get in Touch</h6>
            <h1 className='md:text-4xl text-3xl font-bold '>Ways to Contact Me</h1>
            <h5 className='md:text-lg text-md  mt-3'> I am eager to discuss the exciting opportunities that lie ahead and how our collaboration can be a mutually enriching experience. Please feel free to connect with me, and let's embark on this journey of innovation and growth together</h5>
        </div>
        <div className='flex flex-wrap justify-center gap-4'>

          <div className="justify-center mt-10">
            <a href="https://github.com/Kizu17">
            <button 
              className="group flex justify-center p-2 h-16 w-52 rounded-md drop-shadow-xl bg-color text-color font-semibold hover:translate-y-3 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#331029] hover:to-[#310413]">
              <FaGithub className='md:h-8 md:w-8 h-6 w-6 mt-2' />
              <h2 className='ml-2 mt-3'>GitHub</h2>
              <span
                className="absolute opacity-0 group-hover:opacity-100 group-hover:text-color group-hover:text-lg group-hover:-translate-y-10 duration-700"
              >
                Follow Me!
              </span>
            </button>
            </a>
          </div>

          <div className="justify-center mt-10">
            <a href="https://www.facebook.com/rogerray.cruz">
            <button
              className="group flex justify-center p-2 h-16 w-52 rounded-md drop-shadow-xl bg-color text-color font-semibold hover:translate-y-3 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#331029] hover:to-[#310413]">
              <FaFacebookF className='md:h-8 md:w-8 h-6 w-6 mt-2' />
              <h2 className='ml-2 mt-3'>FaceBook</h2>
              <span
                className="absolute opacity-0 group-hover:opacity-100 group-hover:text-color group-hover:text-lg group-hover:-translate-y-10 duration-700"
              >
                Follow Me!
              </span>
            </button>
            </a>
          </div>

          <div className="justify-center mt-10">
            <a href="https://www.instagram.com/_.k_i_z_u._/">
            <button
              className="group flex justify-center p-2 h-16 w-52 rounded-md drop-shadow-xl bg-color text-color font-semibold hover:translate-y-3 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#331029] hover:to-[#310413]">
              <FaInstagram className='md:h-8 md:w-8 h-6 w-6 mt-2' />
              <h2 className='ml-2 mt-3'>Instagram</h2>
              <span
                className="absolute opacity-0 group-hover:opacity-100 group-hover:text-color group-hover:text-lg group-hover:-translate-y-10 duration-700"
              >
                Follow Me!
              </span>
            </button>
            </a>
          </div> 
        </div>

        <div className='flex flex-wrap justify-center gap-4 pb-24'>
          <div className="justify-center mt-10">
            <a href="href=tel:+09357680461">
              <button
                className="group flex justify-center p-2 h-16 w-52 rounded-md drop-shadow-xl bg-color text-color font-semibold hover:translate-y-3 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#331029] hover:to-[#310413]">
                <FaPhoneAlt className='md:h-8 md:w-8 h-6 w-6 mt-2' />
                <h2 className='ml-2 mt-3'>09357680461</h2>
                <span
                  className="absolute opacity-0 group-hover:opacity-100 group-hover:text-color group-hover:text-lg group-hover:-translate-y-10 duration-700"
                >
                  Call Me!
                </span>
              </button>
              </a>
            </div>  

            <div className="justify-center mt-10">
              <a href="mailto:rogerraycruz17@gmail.com">
            <button
              className="group flex justify-center p-2 h-16 w-52 rounded-md drop-shadow-xl bg-color text-color font-semibold hover:translate-y-3 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#331029] hover:to-[#310413]">
              <MdEmail className='md:h-8 md:w-8 h-6 w-6 mt-2' />
              <h2 className='ml-2 mt-3'>Email</h2>
              <span
                className="absolute opacity-0 group-hover:opacity-100 group-hover:text-color group-hover:text-lg group-hover:-translate-y-10 duration-700"
              >
                Email Me!
              </span>
            </button>
            </a>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;