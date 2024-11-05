import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center text-center">
      <img 
        src="/profile.png" 
        alt="Yishak Mitiku" 
        className="w-40 h-40 rounded-full mb-4 border-2 border-yellow-500  shadow-md shadow-yellow-500/60"
      />
      <h1 className="text-4xl md:text-5xl font-bold">
        Hi, I'm <span className="text-yellow-500 ">Yishak Mitiku</span>
      </h1>
      <p className="text-lg md:text-xl mt-4">Full-Stack Developer & Java Programmer</p>
      <div className="flex mt-6 space-x-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-yellow-500" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-yellow-500" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-yellow-500" />
        </a>
      </div>
      <button className="mt-8 px-6 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition duration-300">
        Contact Me
      </button>
    </section>
  );
}

export default Hero;
