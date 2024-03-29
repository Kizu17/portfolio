import React from 'react';
import './style.css';
import { FaCss3Alt } from "react-icons/fa6"; 
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaReact, FaJava, FaPython } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTailwindcss, SiKrita, SiCanva } from "react-icons/si";
import Gradient_blob from '../assets/Gradient_blob.png';
import resumeImg from '../assets/resumeImg.png';
import AnimatedShape  from '../assets/AnimatedShape.svg';

const download = (content, fileName, contentType) => {
  const a = document.createElement('a');
  const file = new Blob([content], { type: contentType });

  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();

  URL.revokeObjectURL(a.href);
};

const Work = () => {
  // Function to handle the download when the button is clicked
  const handleDownloadResume = () => {
    // Replace 'RogerCruz_Resume.pdf' and 'INSERT_BASE64_ENCODED_PDF_DATA_HERE' with actual values
    const fileName = 'RogerCruz_Resume.pdf';
    const pdfData = 'INSERT_BASE64_ENCODED_PDF_DATA_HERE'; // Replace with your actual base64-encoded PDF data

    // Trigger the file download
    download(pdfData, fileName, 'application/pdf');
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return ( 
    <div id='project' className='max-x-[1040px] h-auto m-auto  bg-gradient-to-r from-gray-800 to-black'>
      <div  style={{
        backgroundImage: `url(${AnimatedShape})`,
        backgroundSize: 'cover',
        height: '100%',
        width: '100%'
      }}>
        <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 2 }}>
          
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 lg:pl-24 p-4 py-16 relative'> 
          <div className='text-center text-white '>
            <h6 className='text-gold m-0 md:text-xl text-lg md:mt-20'>What I know</h6>
            <p className='mb-4 md:text-4xl text-3xl font-bold'>Discover My Abilities At Work</p>
            <div className='grid grid-cols-2 md:gap-3 md:pl-12 md:pt-6 relative justify-items-center md:pb-16'>
            
            
              <div className='bg-color md:h-44 md:w-64 h-28 w-32 shadow-xl rounded-lg md:mb-6 mb-8'>
                  <div className='flex flex-row md:mt-8 md:ml-2 mt-4 ml-1'>
                      <div><FaCss3Alt className='text-gold md:h-8 md:w-8 h-6 w-6' /></div>
                      <div><FaHtml5 className='text-gold md:h-8 md:w-8 h-6 w-6' /></div>
                      <div><DiJavascript className='text-gold md:h-8 md:w-8 h-6 w-6' /></div>
                      <div><FaReact className='text-gold md:h-8 md:w-8 h-6 w-6'/></div>
                      <div><SiTailwindcss className='text-gold md:h-8 md:w-8 h-6 w-6'/></div>
                  </div> 
                  <h3 className='text-white font-bold text-md md:text-lg mt-1 md:ml-3 md:text-left'>Web Development</h3>
                  <h4 className='md:text-l text-sm mt-1 hidden md:block md:ml-3 text-justify mr-2'>As an IT student Web development on Front End side has always been my focus.</h4>
              </div>
            

             

            <div className='bg-color md:h-44 md:w-64 h-28 w-32 shadow-xl rounded-lg mb-8'>
              <div><FaJava className='text-gold md:h-8 md:w-8 h-6 w-6 md:mt-8 md:ml-4 mt-4 ml-12' /></div>
              <h3 className='text-white font-bold text-md md:text-xl md:ml-5 mt-1 md:first-letter md:text-left'>Java</h3>
              <h4 className='md:text-l text-sm mt-1 hidden md:block md:ml-5 text-justify mr-2'>Java is my 1st Programming language that i learn alongside C++.</h4>
            </div>

            <div className='bg-color md:h-44 md:w-64 h-28 w-32 shadow-xl rounded-lg '>
              <div><FaPython className='text-gold md:h-8 md:w-8 h-6 w-6 md:mt-8 md:ml-4 mt-4 ml-12'/></div>
              <h3 className='text-white font-bold text-md md:text-xl md:ml-5 mt-1 md:text-left'>Python</h3>
              <h4 className='md:text-l text-sm mt-1 hidden md:block md:ml-5 text-justify mr-2'>I Recently Learned the basics of Python and even made a game using Pygame.</h4>
            </div>

            <div className='bg-color md:h-44 md:w-64 h-28 w-32 shadow-xl rounded-lg '>
              <div className='flex flex-row md:mt-8 md:ml-4 mt-4 ml-10'>
                <div><SiCanva className='text-gold md:h-8 md:w-8 h-6 w-6'/></div>
                <div><SiKrita className='text-gold md:h-8 md:w-8 h-6 w-6'/></div>
              </div>
              <h3 className='text-white font-bold text-md md:text-xl md:ml-5 mt-1 md:text-left'>Digital Art/Designs</h3>
              <h4 className='md:text-l text-sm  mt-1 hidden md:block md:ml-5 text-justify mr-2'>I draw Illustrations on Krita and design Infographics, websites, presentations, etc on Canva.</h4>
            </div>
            </div>
          </div>
  
          <div className='' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <div className='relative z-10 lg:mt-8'>
              <img src={resumeImg} className='md:w-80 md:h-8/12 w-72' alt="" />
            </div>
            <div className='absolute z-0'>
              <img src={Gradient_blob} className='md:w-124 md:h-96 w-100 h-80' alt="" />
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </div> 
  );
}

export default Work;
