import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 px-6 text-center bg-gray-800">
      <h2 className="text-3xl font-bold text-yellow-500 mb-4 animate-pulse">Who I Am</h2>
      <p className="text-lg max-w-2xl mx-auto leading-relaxed">
        I'm a dedicated Full-Stack Developer with expertise in Java and modern web technologies, aiming to build engaging and responsive applications.
      </p>
      <button className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition duration-300">
        Read More
      </button>
    </section>
  );
}

export default About;
