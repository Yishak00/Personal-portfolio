import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center bg-gray-800">
      <h2 className="text-3xl font-bold text-yellow-500 mb-6 animate-pulse">Contact Me</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-gray-900 text-white focus:outline-none" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded bg-gray-900 text-white focus:outline-none" />
        <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-2 rounded bg-gray-900 text-white focus:outline-none"></textarea>
        <button type="submit" className="w-full px-4 py-2 bg-yellow-500 rounded font-semibold hover:bg-yellow-600 transition duration-300">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
