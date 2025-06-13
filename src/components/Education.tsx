import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications',
      institution: 'D N R College',
      location: 'Bhimavaram, Andhra Pradesh',
      period: 'April 2025',
      status: 'Current',
      description: 'Advanced studies in computer applications with focus on modern software development practices.'
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'B V Raju College',
      location: 'Bhimavaram, Andhra Pradesh',
      period: 'September 2022',
      status: 'Completed',
      description: 'Comprehensive foundation in computer science principles and programming fundamentals.'
    }
  ];

  const certifications = [
    {
      name: 'TCS ION Career Edge-Young Professional',
      issuer: 'TCS ION',
      icon: Award
    },
    {
      name: 'Accenture Developer Virtual Experience Program',
      issuer: 'Accenture',
      icon: Award
    },
    {
      name: 'TCS EGS Virtual Experience Program',
      issuer: 'TCS',
      icon: Award
    }
  ];

  const internships = [
    {
      title: 'Finance Web Application Development',
      description: 'Developed and deployed a responsive finance management web app using React.js, HTML, CSS, and JavaScript, featuring a user-friendly UI for seamless financial tracking and optimized performance on Netlify.',
      type: 'Web Development'
    },
    {
      title: 'Movie Ticket Booking System',
      description: 'Completed a Python internship on "A Movie Ticket Booking System," gaining hands-on experience in developing a functional ticket reservation platform.',
      type: 'Python Development'
    }
  ];

  return (
    <section id="education" className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-teal-100/40 to-cyan-100/40 rounded-full blur-3xl animate-spin-reverse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-100/25 to-blue-100/25 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education & Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                        <p className="text-blue-600 font-medium">{edu.institution}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-gray-600">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      edu.status === 'Current' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internships Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Internship Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium">
                    {internship.type}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{internship.title}</h4>
                <p className="text-gray-600 leading-relaxed">{internship.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <cert.icon className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;