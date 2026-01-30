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
            Advanced academic pursuits combining undergraduate engineering excellence with graduate-level computer science specialization
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover-lift animate-slide-in-left">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center animate-pulse-glow">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    Master of Science in Computer Science and Information Technology
                  </h3>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-[10px] font-semibold">
                    Current
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>NED University of Engineering & Technology</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>January 2026 - Present</span>
                  </div>
                </div>

                <p className="text-xs text-gray-700 mb-6 leading-relaxed">
                  Advanced graduate program specializing in cutting-edge computer science and information technology. Focused on emerging technologies, advanced algorithms, distributed systems, and research methodologies with practical applications in industry-leading software development and AI-driven solutions.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-xs font-semibold text-blue-900 mb-2">Program Focus</h4>
                    <ul className="text-[10px] text-blue-700 space-y-1">
                      <li>• Advanced Computing Systems</li>
                      <li>• Software Development</li>
                      <li>• Information Technology</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-xs font-semibold text-blue-900 mb-2">Research Areas</h4>
                    <ul className="text-[10px] text-blue-700 space-y-1">
                      <li>• Distributed Systems</li>
                      <li>• Advanced Algorithms</li>
                      <li>• Emerging Technologies</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-xs font-semibold text-blue-900 mb-2">Academic Goals</h4>
                    <ul className="text-[10px] text-blue-700 space-y-1">
                      <li>• Advanced Specialization</li>
                      <li>• Research Excellence</li>
                      <li>• Industry Leadership</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover-lift animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center animate-pulse-glow">
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