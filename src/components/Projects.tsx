import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, Globe, Smartphone } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Online Water Supply System',
      description: 'A comprehensive web service platform that allows users to book water services through a simple and flexible interface.',
      fullDescription: 'The main objective of "Online water service" is to allow users to get water services by booking them through a simple and flexible web site. This system leverages existing user data to create predictive algorithms, leading to a 17% increase in customer satisfaction. The platform features automated processes for booking, scheduling, and billing, making it efficient for both customers and service providers.',
      technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Node.js'],
      features: [
        'User-friendly booking interface',
        'Automated scheduling system',
        'Predictive algorithms for service optimization',
        '17% increase in customer satisfaction',
        'Real-time booking status updates'
      ],
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Library Management System',
      description: 'A dynamic front-end web application built with React.js featuring an interactive user interface for seamless library operations.',
      fullDescription: 'Designed a dynamic front-end web application using React.js, HTML5, and CSS3, featuring an interactive user interface with React Router for seamless navigation. The system implements search filters, book categorization, and a responsive design to enhance user experience, focusing on client-side functionality.',
      technologies: ['React.js', 'HTML5', 'CSS3', 'React Router', 'JavaScript'],
      features: [
        'Interactive user interface',
        'Advanced search and filtering',
        'Book categorization system',
        'Responsive design',
        'Seamless navigation with React Router'
      ],
      icon: Database,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Personal Portfolio',
      description: 'A modern portfolio website showcasing skills and accomplishments with a focus on user experience and visual appeal.',
      fullDescription: 'My personal portfolio is a collection of my work, showcasing my skills and accomplishments. It\'s a place where you can explore what I\'ve done and get to know me better through my projects, skills, and professional journey.',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
      features: [
        'Responsive design',
        'Interactive animations',
        'Modern UI/UX',
        'Project showcases',
        'Contact integration'
      ],
      icon: Code,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Finance Web Application',
      description: 'A responsive finance management web application featuring user-friendly UI for seamless financial tracking.',
      fullDescription: 'Developed and deployed a responsive finance management web app using React.js, HTML, CSS, and JavaScript. The application features a user-friendly UI for seamless financial tracking and optimized performance on Netlify. This project demonstrates full-stack development capabilities and modern deployment practices.',
      technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Netlify'],
      features: [
        'Financial tracking and management',
        'Responsive design',
        'User-friendly interface',
        'Cloud deployment',
        'Performance optimization'
      ],
      icon: Smartphone,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="relative py-20 bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-teal-100/30 to-cyan-100/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating expertise in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-gradient-to-r ${project.color} rounded-lg mr-4`}>
                    <project.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setSelectedProject(index)}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>View Details</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 text-sm font-medium">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className={`h-2 bg-gradient-to-r ${projects[selectedProject].color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-3 bg-gradient-to-r ${projects[selectedProject].color} rounded-lg mr-4`}>
                      {(() => {
                        const IconComponent = projects[selectedProject].icon;
                        return <IconComponent className="text-white" size={24} />;
                      })()}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{projects[selectedProject].title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  {projects[selectedProject].fullDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Features:</h4>
                  <ul className="space-y-2">
                    {projects[selectedProject].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;