import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Palette, Settings, Users, FileText } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
      ]
    },
    {
      icon: Database,
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 75 },
        { name: 'SQL', level: 80 },
        { name: 'Git', level: 70 },
      ]
    },
    {
      icon: Settings,
      title: 'Tools & Technologies',
      skills: [
        { name: 'VS Code', level: 90 },
        { name: 'GitHub', level: 80 },
        { name: 'Responsive Design', level: 85 },
        { name: 'REST APIs', level: 75 },
      ]
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: [
        { name: 'Team Leadership', level: 80 },
        { name: 'Communication', level: 90 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Interpersonal Skills', level: 85 },
      ]
    },
    {
      icon: FileText,
      title: 'Office Tools',
      skills: [
        { name: 'MS Word', level: 85 },
        { name: 'MS Excel', level: 80 },
        { name: 'PowerPoint', level: 85 },
        { name: 'Documentation', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-spin-reverse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-teal-200/25 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and capabilities across various domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;