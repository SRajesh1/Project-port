import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://linkedin.com/in/l-n-v-s-s-rajesh-singavarapu-540712232"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:rajeshsingavarapu@gmail.com"
              className="p-3 bg-red-600 rounded-full hover:bg-red-700 transform hover:scale-110 transition-all duration-300"
            >
              <Mail size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transform hover:scale-110 transition-all duration-300"
            >
              <Github size={20} />
            </a>
          </div>
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Rajesh Singavarapu
            </h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>© {currentYear} Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by Rajesh Singavarapu. All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;