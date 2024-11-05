import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 text-center bg-gray-900">
      <h2 className="text-3xl font-bold text-yellow-500 mb-8 animate-pulse">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <FaReact className="text-5xl text-yellow-500 mx-auto mb-4" />
          <p className="text-white font-semibold">React</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <FaNodeJs className="text-5xl text-yellow-500 mx-auto mb-4" />
          <p className="text-white font-semibold">Node.js</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <FaJs className="text-5xl text-yellow-500 mx-auto mb-4" />
          <p className="text-white font-semibold">JavaScript</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <FaHtml5 className="text-5xl text-yellow-500 mx-auto mb-4" />
          <p className="text-white font-semibold">HTML</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <FaCss3Alt className="text-5xl text-yellow-500 mx-auto mb-4" />
          <p className="text-white font-semibold">CSS</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <SiTailwindcss className="text-5xl text-yellow-500 mx-auto mb-4" />
          <p className="text-white font-semibold">Tailwind</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <SiMongodb className="text-5xl text-yellow-500 mx-auto mb-4" />
          <p className="text-white font-semibold">Mongodb</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <FaJava className="text-5xl text-yellow-500 mx-auto mb-4" />
          <p className="text-white font-semibold ">Java</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
