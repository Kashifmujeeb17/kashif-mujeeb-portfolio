import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg z-50 shadow-lg border-b border-gray-100 animate-slide-in-top">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gradient animate-fade-in-left">Kashif Mujeeb</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <button
              onClick={() => scrollToSection('home')}
              className="relative text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium group text-xs"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="relative text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium group text-xs"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="relative text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium group text-xs"
            >
              Education
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="relative text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium group text-xs"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="relative text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium group text-xs"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium group text-xs"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 transition-all duration-300 p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-lg shadow-xl rounded-xl mt-4 border border-gray-100 animate-fade-in-up">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-4 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 w-full text-left rounded-lg font-medium text-xs"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200 w-full text-left text-xs"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200 w-full text-left text-xs"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200 w-full text-left text-xs"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200 w-full text-left text-xs"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200 w-full text-left text-xs"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;