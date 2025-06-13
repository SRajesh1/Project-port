import React from 'react';
import { ChevronDown, MapPin, Mail, Linkedin } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <ParticleBackground />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
              RAJESH
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient delay-300">
              SINGAVARAPU
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
            <span className="block mb-2">Full Stack Developer</span>
            <span className="text-blue-400">React.js • Python • Web Technologies</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12 text-gray-400">
            <div className="flex items-center space-x-2">
              <MapPin size={18} />
              <span>Bhimavaram, Andhra Pradesh</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} />
              <span>rajeshsingavarapu@gmail.com</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <a
              href="https://linkedin.com/in/l-n-v-s-s-rajesh-singavarapu-540712232"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 border border-gray-400 rounded-full text-gray-300 hover:text-white hover:border-white transition-all duration-300"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-400 hover:text-white transition-colors">
            <ChevronDown size={32} />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;