import React from 'react';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Distinguished career trajectory in artificial intelligence and systems engineering within a premier financial services organization
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-blue-100">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 lg:mb-0">
                    Science & Engineering Associate - AI Engineer
                  </h3>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-[10px] font-semibold">
                    Current Position
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Building className="h-4 w-4" />
                    <span className="font-semibold">United Bank Limited</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>April 2025 - Present</span>
                  </div>
                </div>

                <p className="text-xs text-gray-700 mb-4 leading-relaxed">
                  Responsible for the strategic development and implementation of sophisticated artificial intelligence solutions designed to optimize banking operations, enhance customer service delivery, and accelerate digital transformation initiatives. Utilizing advanced AI technologies to address complex financial sector challenges and drive operational excellence.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 mb-2">Primary Responsibilities</h4>
                    <ul className="text-[10px] text-gray-700 space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Architecting AI-driven solutions for critical banking processes and operations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Deploying advanced machine learning models for comprehensive financial analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Leading cross-functional collaboration initiatives for technology integration</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 mb-2">Technical Expertise Areas</h4>
                    <ul className="text-[10px] text-gray-700 space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Advanced Artificial Intelligence & Machine Learning Systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Quantitative Data Analysis & Financial Modeling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Enterprise System Integration & Performance Optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="text-xs font-semibold text-gray-900 mb-2">Professional Impact & Strategic Contributions</h4>
                  <p className="text-gray-700 text-[10px]">
                    Instrumental in advancing the organization's digital transformation strategy through the strategic implementation of AI technologies, resulting in enhanced operational efficiency, superior customer service delivery, and robust data-driven decision-making capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;