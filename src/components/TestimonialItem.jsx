import React from 'react'
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
const TestimonialItem = ({message, name, school, image, message2}) => {
  return (
    <div className=" relative md:w-80 w-72  rounded-xl bg-color bg-clip-border text-color shadow-md mt-10">
                <div className="relative mx-4 -mt-6 h-52 overflow-hidden rounded-xl  text-color shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <div className='relative mt-2 m-1 h-48 bg-color1 rounded-xl'>
                        <p className='p-4 pb-4 md:text-md'>{message}</p>
                    </div>
                </div>
                <div className="p-6">
                    
                    <h5 className="flex flex-row mb-2 font-sans md:text-xl text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        <img src={image} alt="ProfilePicture"  className='text-start md:h-8 md:w-8 h-6 w-6 md:mr-3 mr-2 rounded-full'/> 
                        {name}
                    </h5>
                    <p className="block font-sans font-light leading-relaxed text-inherit antialiased md:text-lg text-md">
                        {school} 
                    </p>
                </div>
                <div className="p-6 pt-0">
                <p className="text-center font-semibold block font-sans leading-relaxed text-inherit antialiased md:text-lg text-md">
                        {message2} 
                    </p>
                </div>
            </div>
  );
};

export default TestimonialItem