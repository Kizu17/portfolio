import React from 'react'
import './style.css';
import TestimonialItem from './TestimonialItem';
import PersonIcon from '../assets/PersonIcon.png'

const data = [
    {
        message: 'Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad, Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad',
        name: 'Person1',
        school: 'Student From Rizal Technological University',
        image: PersonIcon

    },
    {
        message: 'Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad, Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad',
        name: 'Person1',
        school: 'Student From Rizal Technological University',
        image: PersonIcon
    },
    {
        message: 'Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad, Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad',
        name: 'Person1',
        school: 'Student From Rizal Technological University',
        image: PersonIcon

    },
    {
        message: 'Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad, Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad',
        name: 'Person1',
        school: 'Student From Rizal Technological University',
        image: PersonIcon
    },
    {
        message: 'Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad, Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad',
        name: 'Person1',
        school: 'Student From Rizal Technological University',
        image: PersonIcon

    },
    {
        message: 'Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad, Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad',
        name: 'Person1',
        school: 'Student From Rizal Technological University',
        image: PersonIcon
    },
]


const Testimonial = () => { 
  return ( 
    <div className='max-x-[1040px] m-auto p-4 py-16 relative '>
        <h6 className='text-gold md:mt-28 m-0 text-center'>Shared Acclaim</h6>
        <h2 className='text-color text-center md:text-4xl text-3xl font-bold'>Testimonials</h2>
        <h5 className='md:text-lg text-md text-color text-center mb-10 mt-4 lg:mr-64 lg:ml-64'>These testimonials from my collaborators stand as a testament to the meaningful connections and collaborative spirit that define our shared experiences.</h5>
         <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-4 justify-items-center'>
            {data.map((item, idx)=> (
                <TestimonialItem 
                key={idx} 
                message={item.message} 
                name={item.name} 
                school={item.school} 
                image={item.image}/>
            ))}
            

        </div>
    </div>
  )
}

export default Testimonial