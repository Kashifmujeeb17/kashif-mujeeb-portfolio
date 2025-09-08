import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Academic Credentials
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Comprehensive academic foundation in computer systems engineering and advanced engineering methodologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Bachelor of Engineering in Computer Systems Engineering
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>Sukkur IBA University</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Graduated 2024</span>
                  </div>
                </div>

                <p className="text-xs text-gray-700 mb-6 leading-relaxed">
                  Comprehensive academic program encompassing computer systems architecture, hardware-software integration methodologies, and advanced engineering principles. Acquired specialized expertise in system design, software development, digital systems implementation, and computer architecture with emphasis on practical applications in contemporary technology environments.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-xs font-semibold text-blue-900 mb-2">Core Curriculum</h4>
                    <ul className="text-[10px] text-blue-700 space-y-1">
                      <li>• Computer Architecture</li>
                      <li>• Software Engineering</li>
                      <li>• Data Structures & Algorithms</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-xs font-semibold text-blue-900 mb-2">Technical Specializations</h4>
                    <ul className="text-[10px] text-blue-700 space-y-1">
                      <li>• Advanced System Design</li>
                      <li>• Digital Systems</li>
                      <li>• Embedded Systems</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-xs font-semibold text-blue-900 mb-2">Professional Competencies</h4>
                    <ul className="text-[10px] text-blue-700 space-y-1">
                      <li>• Analytical Problem Resolution</li>
                      <li>• Systems Analysis & Design</li>
                      <li>• Technical Architecture Planning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;