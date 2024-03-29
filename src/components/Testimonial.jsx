import React from 'react'
import './style.css';
import TestimonialItem from './TestimonialItem';
import PersonIcon from '../assets/PersonIcon.png'
import meri from '../assets/meri.jpg'
import Ash from '../assets/Ash.jpg'
const data = [
    {
        message: '"He goes above and beyond, not only helping me with coding challenges but also offering support in various aspects of my projects."',
        name: 'Merry Anne Andus',
        school: 'Student From Rizal Technological University',
        image: meri,
        message2: "Classmate"

    },
    { 
        message: '"Ive known him for some time now and one thing that has never changed since is his persistence. When he sets a goal, he is determined to reach that no matter what may come along the way"',
        name: 'Maria Julianne Lacuesta',
        school: <span style={{ marginRight: '25px' }}>Student From Asia Pacific College</span>,
        image: PersonIcon,
        message2: "Previous Classmate"
    },
    {
        message: '"I must say, his dedication and perseverance alone is an impressive trait as a team member; makes the whole team motivated, you know?"',
        name: 'Jhulienne Ashley Tan',
        school: 'Student From Our Lady of Fatima University',
        image: Ash,
        message2: "Previous Classmate"
    },
    {
        message: 'Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad, Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad',
        name: 'Person1',
        school: 'Student From Rizal Technological University',
        image: PersonIcon,
        message2: "Classmate"
    }, 
    {
        message: 'Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad, Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad',
        name: 'Person1',
        school: 'Student From Rizal Technological University',
        image: PersonIcon,
        message2: "Classmate"

    },
    {
        message: 'Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad, Lorem ipsum dolor sit amet, hehe jcapc ldolr dir jadad',
        name: 'Person1',
        school: 'Student From Rizal Technological University',
        image: PersonIcon,
        message2: "Classmate"
    },
]

 
const Testimonial = () => { 
  return (  
    <div className='max-x-[1040px] m-auto p-4 py-16 relative '>
        <h6 className='text-gold md:mt-28 m-0 text-center'>Shared Acclaim</h6>
        <h2 className='text-color text-center md:text-4xl text-3xl font-bold'>Testimonials</h2>
        <h5 className='md:text-lg text-md text-color text-center mb-10 mt-4 lg:mr-64 lg:ml-64'>These testimonials from my collaborators stand as a testament to the meaningful connections and collaborative spirit that define our shared experiences.</h5>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 justify-items-center'>
            {data.map((item, idx)=> (
                <TestimonialItem 
                key={idx} 
                message={item.message} 
                name={item.name} 
                school={item.school} 
                image={item.image}
                message2={item.message2}/>
            ))}
            

        </div>
    </div>
  )
}

export default Testimonial