import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2024 Yishak Mitiku. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-yellow-500" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-yellow-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-yellow-500" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
