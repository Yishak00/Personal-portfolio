import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 fixed w-full top-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-500 animate-pulse text-shadow-md text-shadow-yellow-500/50 ">Yishak's Portfolio</h1>
        <ul className="flex space-x-6 text-white">
          <li >
            <a href="#about" className=" hover:text-yellow-500 transition duration-200">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-500 transition duration-200">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-yellow-500 transition duration-200">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-500 transition duration-200">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
