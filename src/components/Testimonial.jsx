import React from 'react'
import './style.css';
import { FaInstagram, FaGithub, FaFacebookF} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
const Testimonial = () => { 
  return ( 
    <div className='max-x-[1040px] m-auto p-4 py-16 relative bg-gradient-to-r from-gray-800 to-black'>
        <h6 className='text-gold md:mt-28 m-0 text-center'>Shared Acclaim</h6>
        <h2 className='text-color text-center md:text-4xl text-3xl font-bold'>Testimonials</h2>
        <h5 className='md:text-lg text-md text-color text-center mb-10 mt-4 lg:mr-64 lg:ml-64'>These testimonials from my collaborators stand as a testament to the meaningful connections and collaborative spirit that define our shared experiences.</h5>
         <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-4 justify-items-center'>

            <div className="relative flex md:w-80 sm:w-64 w-56  flex-col rounded-xl bg-color bg-clip-border text-color shadow-md mt-10">
                <div className="relative mx-4 -mt-6 h-52 overflow-hidden rounded-xl  text-color shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <div className='relative mt-2 m-1 h-48 bg-color1 rounded-xl'>
                        <p className='p-4 pb-4 md:text-lg text-md'>"Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad, Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad"</p>
                    </div>
                </div>
                <div className="p-6">
                    
                    <h5 className="flex flex-row mb-2 font-sans md:text-xl text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        <img src="PersonIcon.png" alt="ProfilePicture"  className='text-start md:h-8 md:w-8 h-6 w-6 md:mr-3 mr-2'/> 
                        Person Name
                    </h5>
                    <p className="block font-sans font-light leading-relaxed text-inherit antialiased md:text-lg text-md">
                        Student From Rizal Technological University
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <div className='flex flex-row justify-center text-color md:pt-4 pt-2 cursor-pointer'>
                        <a href="https://twitter.com/RogerCruz123321" className=''>
                            <FaXTwitter className='md:h-6 md:w-6 h-4 w-4' />
                        </a>
                        
                        <a href="https://www.facebook.com/rogerray.cruz">
                            <FaFacebookF className='ml-4 md:h-6 md:w-6 h-4 w-4' />
                        </a>

                        <a href="https://www.instagram.com/_.k_i_z_u._/">
                            <FaInstagram className='ml-4 md:h-6 md:w-6 h-4 w-4 ' />
                        </a>
                        <a href="">
                            <FaGithub className='ml-4 md:h-6 md:w-6 h-4 w-4' />
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative flex md:w-80 w-64 flex-col rounded-xl bg-color bg-clip-border text-color shadow-md mt-10">
                <div className="relative mx-4 -mt-6 h-52 overflow-hidden rounded-xl  text-color shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <div className='relative mt-2 m-1 h-48 bg-color1 rounded-xl'>
                        <p className='p-4 pb-4 md:text-lg text-md'>"Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad, Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad"</p>
                    </div>
                </div>
                <div className="p-6">
                    <h5 className="flex flex-row mb-2 font-sans md:text-xl text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    <img src="PersonIcon.png" alt="ProfilePicture"  className='text-start md:h-8 md:w-8 h-6 w-6 md:mr-3 mr-2'/> 
                        Person Name
                    </h5>
                    <p className="block font-sans font-light leading-relaxed text-inherit antialiased md:text-lg text-md">
                        Student From Rizal Technological University
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <div className='flex flex-row justify-center text-color md:pt-4 pt-2 cursor-pointer'>
                        <a href="https://twitter.com/RogerCruz123321" className=''>
                            <FaXTwitter className='md:h-6 md:w-6 h-4 w-4' />
                        </a>
                        
                        <a href="https://www.facebook.com/rogerray.cruz">
                            <FaFacebookF className='ml-4 md:h-6 md:w-6 h-4 w-4' />
                        </a>

                        <a href="https://www.instagram.com/_.k_i_z_u._/">
                            <FaInstagram className='ml-4 md:h-6 md:w-6 h-4 w-4 ' />
                        </a>
                        <a href="">
                            <FaGithub className='ml-4 md:h-6 md:w-6 h-4 w-4' />
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative flex md:w-80 w-64 flex-col rounded-xl bg-color bg-clip-border text-color shadow-md mt-10">
                <div className="relative mx-4 -mt-6 h-52 overflow-hidden rounded-xl  text-color shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <div className='relative mt-2 m-1 h-48 bg-color1 rounded-xl'>
                        <p className='p-4 pb-4 md:text-lg text-md'>"Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad, Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad"</p>
                    </div>
                </div>
                <div className="p-6">
                    <h5 className="flex flex-row mb-2 font-sans md:text-xl text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    <img src="PersonIcon.png" alt="ProfilePicture"  className='text-start md:h-8 md:w-8 h-6 w-6 md:mr-3 mr-2'/> 
                        Person Name
                    </h5>
                    <p className="block font-sans font-light leading-relaxed text-inherit antialiased md:text-lg text-md">
                        Student From Rizal Technological University
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <div className='flex flex-row justify-center text-color md:pt-4 pt-2 cursor-pointer'>
                        <a href="https://twitter.com/RogerCruz123321" className=''>
                            <FaXTwitter className='md:h-6 md:w-6 h-4 w-4' />
                        </a>
                        
                        <a href="https://www.facebook.com/rogerray.cruz">
                            <FaFacebookF className='ml-4 md:h-6 md:w-6 h-4 w-4' />
                        </a>

                        <a href="https://www.instagram.com/_.k_i_z_u._/">
                            <FaInstagram className='ml-4 md:h-6 md:w-6 h-4 w-4 ' />
                        </a>
                        <a href="">
                            <FaGithub className='ml-4 md:h-6 md:w-6 h-4 w-4' />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="relative flex md:w-80 w-64 flex-col rounded-xl bg-color bg-clip-border text-color shadow-md mt-10">
                <div className="relative mx-4 -mt-6 h-52 overflow-hidden rounded-xl  text-color shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <div className='relative mt-2 m-1 h-48 bg-color1 rounded-xl'>
                        <p className='p-4 pb-4 md:text-lg text-md'>"Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad, Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad"</p>
                    </div>
                </div>
                <div className="p-6">
                    <h5 className="flex flex-row mb-2 font-sans md:text-xl text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        <img src="PersonIcon.png" alt="ProfilePicture"  className='text-start md:h-8 md:w-8 h-6 w-6 md:mr-3 mr-2'/> 
                        Person Name
                    </h5>
                    <p className="block font-sans font-light leading-relaxed text-inherit antialiased md:text-lg text-md">
                        Student From Rizal Technological University
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <div className='flex flex-row justify-center text-color md:pt-4 pt-2 cursor-pointer'>
                        <a href="https://twitter.com/RogerCruz123321" className=''>
                            <FaXTwitter className='md:h-6 md:w-6 h-4 w-4' />
                        </a>
                        
                        <a href="https://www.facebook.com/rogerray.cruz">
                            <FaFacebookF className='ml-4 md:h-6 md:w-6 h-4 w-4' />
                        </a>

                        <a href="https://www.instagram.com/_.k_i_z_u._/">
                            <FaInstagram className='ml-4 md:h-6 md:w-6 h-4 w-4 ' />
                        </a>
                        <a href="">
                            <FaGithub className='ml-4 md:h-6 md:w-6 h-4 w-4' />
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative flex md:w-80 w-64 flex-col rounded-xl bg-color bg-clip-border text-color shadow-md mt-10">
                <div className="relative mx-4 -mt-6 h-52 overflow-hidden rounded-xl  text-color shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <div className='relative mt-2 m-1 h-48 bg-color1 rounded-xl'>
                        <p className='p-4 pb-4 md:text-lg text-md'>"Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad, Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad"</p>
                    </div>
                </div>
                <div className="p-6">
                    <h5 className="flex flex-row mb-2 font-sans md:text-xl text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        <img src="PersonIcon.png" alt="ProfilePicture"  className='text-start md:h-8 md:w-8 h-6 w-6 md:mr-3 mr-2'/> 
                        Person Name
                    </h5>
                    <p className="block font-sans font-light leading-relaxed text-inherit antialiased md:text-lg text-md">
                        Student From Rizal Technological University
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <div className='flex flex-row justify-center text-color md:pt-4 pt-2 cursor-pointer'>
                        <a href="https://twitter.com/RogerCruz123321" className=''>
                            <FaXTwitter className='md:h-6 md:w-6 h-4 w-4' />
                        </a>
                        
                        <a href="https://www.facebook.com/rogerray.cruz">
                            <FaFacebookF className='ml-4 md:h-6 md:w-6 h-4 w-4' />
                        </a>

                        <a href="https://www.instagram.com/_.k_i_z_u._/">
                            <FaInstagram className='ml-4 md:h-6 md:w-6 h-4 w-4 ' />
                        </a>
                        <a href="">
                            <FaGithub className='ml-4 md:h-6 md:w-6 h-4 w-4' />
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative flex md:w-80 w-64 flex-col rounded-xl bg-color bg-clip-border text-color shadow-md mt-10">
                <div className="relative mx-4 -mt-6 h-52 overflow-hidden rounded-xl  text-color shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <div className='relative mt-2 m-1 h-48 bg-color1 rounded-xl'>
                        <p className='p-4 pb-4 md:text-lg text-md'>"Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad, Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad"</p>
                    </div>
                </div>
                <div className="p-6">
                    <h5 className="flex flex-row mb-2 font-sans md:text-xl text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        <img src="PersonIcon.png" alt="ProfilePicture"  className='text-start md:h-8 md:w-8 h-6 w-6 md:mr-3 mr-2'/> 
                        Person Name
                    </h5>
                    <p className="block font-sans font-light leading-relaxed text-inherit antialiased md:text-lg text-md">
                        Student From Rizal Technological University
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <div className='flex flex-row justify-center text-color md:pt-4 pt-2 cursor-pointer'>
                        <a href="https://twitter.com/RogerCruz123321" className=''>
                            <FaXTwitter className='md:h-6 md:w-6 h-4 w-4' />
                        </a>
                        
                        <a href="https://www.facebook.com/rogerray.cruz">
                            <FaFacebookF className='ml-4 md:h-6 md:w-6 h-4 w-4' />
                        </a>

                        <a href="https://www.instagram.com/_.k_i_z_u._/">
                            <FaInstagram className='ml-4 md:h-6 md:w-6 h-4 w-4 ' />
                        </a>
                        <a href="">
                            <FaGithub className='ml-4 md:h-6 md:w-6 h-4 w-4' />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Testimonial