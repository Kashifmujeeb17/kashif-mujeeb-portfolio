import React from 'react';
import { Brain, Code, Database, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 fade-in-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Professional Profile
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-blue-500 mx-auto mb-6 animate-fade-in-up stagger-1"></div>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto animate-fade-in-up stagger-2">
            Accomplished AI Engineer with comprehensive expertise in computer systems engineering and demonstrated proficiency in developing advanced intelligent solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-left">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Professional Background</h3>
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              Currently serving as Science & Engineering Associate - AI Engineer at United Bank Limited, with primary responsibilities encompassing the development and implementation of sophisticated artificial intelligence solutions designed to optimize banking operations and enhance customer service delivery.
            </p>
            <p className="text-xs text-gray-600 mb-6 leading-relaxed">
              Educational foundation in Computer Systems Engineering from Sukkur IBA University provides comprehensive expertise in both hardware and software systems architecture, facilitating the development of robust, scalable artificial intelligence solutions tailored to enterprise-level requirements.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg hover-lift animate-scale-in stagger-1">
                <div className="text-xl font-bold text-blue-700 mb-1">2024</div>
                <div className="text-xs font-semibold text-gray-700">Academic Completion</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg hover-lift animate-scale-in stagger-2">
                <div className="text-xl font-bold text-blue-700 mb-1">2025</div>
                <div className="text-xs font-semibold text-gray-700">Professional Commencement</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 animate-fade-in-right">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-2xl transition-all duration-500 hover-lift animate-scale-in stagger-1 group">
              <Brain className="h-10 w-10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-sm font-bold text-gray-900 mb-2">Artificial Intelligence Solutions</h4>
              <p className="text-xs text-gray-600 text-[10px]">Engineering sophisticated intelligent systems for financial services applications</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-2xl transition-all duration-500 hover-lift animate-scale-in stagger-2 group">
              <Code className="h-10 w-10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-sm font-bold text-gray-900 mb-2">Systems Engineering</h4>
              <p className="text-xs text-gray-600 text-[10px]">Comprehensive expertise in computer systems architecture and enterprise software development</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-2xl transition-all duration-500 hover-lift animate-scale-in stagger-3 group">
              <Database className="h-10 w-10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-sm font-bold text-gray-900 mb-2">Data Analytics</h4>
              <p className="text-xs text-gray-600 text-[10px]">Advanced proficiency in statistical analysis and machine learning algorithm implementation</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-2xl transition-all duration-500 hover-lift animate-scale-in stagger-4 group">
              <Lightbulb className="h-10 w-10 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-sm font-bold text-gray-900 mb-2">Technical Innovation</h4>
              <p className="text-xs text-gray-600 text-[10px]">Committed to developing cutting-edge technological solutions for complex business challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;