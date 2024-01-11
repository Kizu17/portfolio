import React from 'react'
import About from './About'
import Resume from './Resume'
import Work from './Work'
import Contact from './Contact'

const Body = () => {
  return (
    <div style={{ backgroundImage: 'url(./AnimatedShape2.svg)', backgroundSize: 'cover', minHeight: '100vh'}} className='bg-gradient-to-r from-gray-800 to-black z-auto'>
        <About />
        <Work />
        <Resume />
        <Contact />
        
      </div>
  )
}

export default Body