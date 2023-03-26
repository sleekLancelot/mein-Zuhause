import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Hero, Navbar, StarsCanvas } from './components';
import { About, Contact } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-image bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        <About />

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
