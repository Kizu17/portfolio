import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Logo from './components/Logo'
import About from './components/About'
import Resume from './components/Resume'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
      <div>
        <Logo />
        <Sidenav />
        <Main />
        <About />
        <Work />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
