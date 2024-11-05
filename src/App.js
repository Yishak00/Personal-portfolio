import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
      {/* Your app content here */}
    </div>
  );
}

export default App;
