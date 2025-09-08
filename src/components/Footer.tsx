import React from 'react';
import { Heart, Linkedin, Mail, Phone, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">Kashif Mujeeb, B.E.</h3>
            <p className="text-gray-400 mb-3 text-xs">
              Science & Engineering Associate specializing in artificial intelligence solutions for the financial services industry.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:kashifmujeeb199@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kashif-mujeeb-64789616a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/Kashifmujeeb17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="tel:+923091352937"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-3">Professional Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  Professional Profile
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  Academic Credentials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  Professional Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-xs"
                >
                  Technical Competencies
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-3">Professional Information</h4>
            <div className="space-y-2 text-gray-400 text-xs">
              <p>Science & Engineering Associate - AI Engineer</p>
              <p>United Bank Limited</p>
              <p>B.E. Computer Systems Engineering</p>
              <p>Sukkur IBA University</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1 text-xs">
            Developed by <Heart className="h-4 w-4 text-red-500" /> Kashif Mujeeb • © 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;