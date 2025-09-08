import React from 'react';
import { ChevronDown, Briefcase, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-cyan-400/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
              Kashif Mujeeb
            </span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 animate-fade-in-up stagger-1">
            <div className="flex items-center gap-3 text-base text-gray-700 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg hover-lift">
              <Briefcase className="h-6 w-6 text-blue-600 animate-pulse-glow" />
              <span>AI Engineer at United Bank Limited</span>
            </div>
            <div className="hidden md:block w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
            <div className="flex items-center gap-3 text-base text-gray-700 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg hover-lift">
              <GraduationCap className="h-6 w-6 text-purple-600 animate-pulse-glow" />
              <span>Computer Systems Engineering</span>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
            Dedicated Science & Engineering Associate specializing in artificial intelligence applications and innovative technological solutions within the financial services sector
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up stagger-3">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 text-sm animate-gradient hover-glow"
            >
              Learn More About Me
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-white/90 backdrop-blur-sm text-gray-700 font-semibold rounded-xl shadow-2xl hover:shadow-3xl border-2 border-gray-200 hover:border-blue-500 transform hover:-translate-y-2 transition-all duration-500 text-sm hover-glow"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;