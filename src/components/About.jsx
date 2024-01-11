import React from 'react';
import './style.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import History from './History';
const download = (content, fileName, contentType) => {
  const a = document.createElement('a');
  const file = new Blob([content], { type: contentType });

  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();

  URL.revokeObjectURL(a.href);
};

function About() {
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
    <div id='about' className='max-x-[1040px] bg-gradient-to-r from-gray-800 to-black'>
      <div style={{ backgroundImage: 'url(/AnimatedShape.svg)', backgroundSize: 'cover'  }}>
      <div className='p-4 py-16 m-auto md:pl-20 relative'>
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 2 }}
        className='grid md:grid-cols-2 md:gap-2 grid-cols-1 gap-1'
      >
        <div className='relative'>
          {/* Blob Image */}
          <img src="./blob.png" alt="" className='absolute top-0 left-0 md:w-full md:h-full w-11/12 h-11/12 z-10' />
          {/* About Image */}
          <img src="./about.png" alt="" className='relative z-10 md:w-full md:h-full w-11/12 h-11/12' />
        </div>
        <div className='md:justify-start text-color md:mr-8 mr-6'>
        <h6 className='text-gold lg:mt-28 m-0 md:text-xl text-lg'>Who Am I?</h6>
          <h1 className='md:text-3xl text-2xl font-bold mt-2 '>I'm Roger Cruz, a Digital Artist/Designer and Web Developer</h1>
          <h2 className='md:mt-1 md:text-lg text-md pt-4 md:mr-10'>Hello! I'm Roger Cruz, a Student Programmer proficient in Python, Java, and C++, and a digital artist/designer using Krita and Canva with the help of a Pentab. As of now, my focus is on creating sleek and intuitive front-end web experiences. <span className='font-semibold'>Let's build something extraordinary!</span></h2>
          <div className="border-b border-solid text-color w-full md:mt-4 mt-3"></div>
          
          <div className='grid grid-cols-2 md:mt-4 mt-2'>
            <div className='flex flex-wrap'>
              <p className='font-bold text-color'>
                Name:
              </p>&nbsp;&nbsp;Roger Cruz
            </div>
            
            <div className='flex flex-wrap'>
              <p className='font-bold text-color'>
                From:
              </p><p className='text-color'>&nbsp;&nbsp;Pasay City</p>
            </div>
            
            <div className='flex flex-wrap'>
              <p className='font-bold text-color'>
                Age:
              </p><p className='text-color'>&nbsp;&nbsp;20</p>
            </div>

            <div className='flex flex-wrap'>
              <p className='font-bold text-color'>
                Email:</p><p className='text-color lg:ml-2 md:ml-0 sm:ml-2 ml-0'>rogerraycruz17@gmail.com</p>
            </div>
          </div>
          <button className="btn-grad mt-8" onClick={handleDownloadResume}>
              Download CV
          </button>
        </div>
      </motion.div>
      </div>

      <History />
      </div>
      
    </div>
  );
}

export default About;
