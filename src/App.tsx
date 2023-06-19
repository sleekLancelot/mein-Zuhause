import React, { useEffect, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Hero, Navbar, StarsCanvas } from './components';
import { About, Contact, Projects, Tech } from './pages';
import Experience from './pages/Experience';

function App() {
  const blob = useRef<any>()

  useEffect(() => {
    window.onpointermove = event => { 
      const { clientX, clientY } = event;
      
      blob.current.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: "forwards" });
    }
    
    return () => {}
  }, [])

  return (
    <BrowserRouter>
      <div className='h-full w-full relative z-10 overflow-hidden'>
        <div ref={blob} id="blob"></div>
        <div id="blur"></div>
        
        <div className='relative z-10 overflow-x-hidden'>

          {/* <div ref={blob} id="blob"></div>
          <div id="blur"></div> */}

          {/* <div className='bg-hero-image bg-cover bg-no-repeat bg-center'> */}
            <Navbar />
            <Hero />
          {/* </div> */}

          <div className="md:bg-[initial] bg-primary">
            <About />
            <Experience />
            <Tech />
            <Projects />
          </div>

          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>

        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
