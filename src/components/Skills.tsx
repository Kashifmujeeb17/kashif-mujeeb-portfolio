import React from 'react';
import { Brain, Code, Database, Cpu, Cloud, BarChart } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      icon: Brain,
      color: 'blue',
      skills: ['Advanced Machine Learning', 'Deep Learning Architectures', 'Natural Language Processing', 'Computer Vision Systems', 'Neural Network Design']
    },
    {
      title: 'Programming & Development',
      icon: Code,
      color: 'blue',
      skills: ['Python Development', 'Java Enterprise Solutions', 'C++ Systems Programming', 'JavaScript Applications', 'R Statistical Computing', 'SQL Database Management']
    },
    {
      title: 'Data Science & Analytics',
      icon: Database,
      color: 'blue',
      skills: ['Advanced Data Science', 'Statistical Analysis & Modeling', 'Data Mining Techniques', 'Big Data Processing', 'Business Intelligence Visualization']
    },
    {
      title: 'Systems Architecture & Engineering',
      icon: Cpu,
      color: 'blue',
      skills: ['Enterprise Computer Architecture', 'Embedded Systems Design', 'Digital Systems Implementation', 'Scalable System Design', 'Hardware-Software Integration']
    },
    {
      title: 'Cloud Computing & Infrastructure',
      icon: Cloud,
      color: 'blue',
      skills: ['Enterprise Cloud Computing', 'AWS Cloud Services', 'Docker Containerization', 'Kubernetes Orchestration', 'Microservices Architecture']
    },
    {
      title: 'Financial Analytics & Modeling',
      icon: BarChart,
      color: 'blue',
      skills: ['Quantitative Financial Modeling', 'Predictive Analytics Systems', 'Risk Assessment Frameworks', 'Business Intelligence Solutions', 'Performance Metrics Analysis']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; icon: string } } = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-900', border: 'border-blue-200', icon: 'text-blue-600' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-900', border: 'border-purple-200', icon: 'text-purple-600' },
      green: { bg: 'bg-green-50', text: 'text-green-900', border: 'border-green-200', icon: 'text-green-600' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-900', border: 'border-orange-200', icon: 'text-orange-600' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-900', border: 'border-indigo-200', icon: 'text-indigo-600' },
      red: { bg: 'bg-red-50', text: 'text-red-900', border: 'border-red-200', icon: 'text-red-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white fade-in-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Technical Competencies & Professional Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-blue-500 mx-auto mb-6 animate-fade-in-up stagger-1"></div>
          <p className="text-sm text-gray-600 max-w-4xl mx-auto animate-fade-in-up stagger-2">
            Comprehensive technical proficiency encompassing artificial intelligence, advanced software engineering, and quantitative data science methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);
            
            return (
              <div
                key={index}
                className={`${colors.bg} p-8 rounded-2xl border ${colors.border} hover:shadow-2xl transition-all duration-500 hover-lift animate-scale-in group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <Icon className={`h-10 w-10 ${colors.icon} mr-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className={`text-sm font-bold ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${skillIndex * 0.05}s` }}
                    >
                      <div className={`w-3 h-3 ${colors.icon.replace('text-', 'bg-')} rounded-full mr-4 animate-pulse`}></div>
                      <span className={`${colors.text} text-[10px] font-medium`}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-white p-12 rounded-3xl shadow-2xl hover-lift animate-fade-in-up">
          <h3 className="text-base font-bold text-gray-900 mb-4 text-center">
            Professional Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-all duration-300 hover-lift animate-scale-in stagger-1">
              <div className="text-xl font-bold text-blue-700 mb-2">AI/ML</div>
              <p className="text-[10px] text-gray-600">Advanced proficiency in artificial intelligence and machine learning</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-all duration-300 hover-lift animate-scale-in stagger-2">
              <div className="text-xl font-bold text-blue-700 mb-2">Systems</div>
              <p className="text-[10px] text-gray-600">Strong foundation in computer systems and engineering</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-all duration-300 hover-lift animate-scale-in stagger-3">
              <div className="text-xl font-bold text-blue-700 mb-2">Data</div>
              <p className="text-[10px] text-gray-600">Expertise in data analysis and statistical modeling</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-all duration-300 hover-lift animate-scale-in stagger-4">
              <div className="text-xl font-bold text-blue-700 mb-2">Innovation</div>
              <p className="text-[10px] text-gray-600">Passionate about developing innovative solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;