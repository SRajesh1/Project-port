import React from 'react';
import { Award, Target, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Highly motivated with eagerness to learn and develop new skills continuously.'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Excellent communication and interpersonal skills for both independent and team work.'
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Committed to delivering high-quality solutions and contributing to organizational success.'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              I am a highly motivated fresher with an eagerness to learn and develop new skills. 
              I possess excellent communication and interpersonal skills with the ability to work 
              both independently and in a team. I am seeking a role to utilize my existing knowledge 
              and develop new skills to contribute to the success of the organization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;