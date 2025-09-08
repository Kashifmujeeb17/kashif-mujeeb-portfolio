import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden fade-in-section">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 animate-fade-in-up">
            Professional Contact
          </h2>
          <div className="w-24 h-1 bg-white/50 mx-auto mb-8 animate-fade-in-up stagger-1"></div>
          <p className="text-sm text-blue-100 max-w-4xl mx-auto animate-fade-in-up stagger-2">
            Available for professional consultation regarding artificial intelligence initiatives, engineering collaborations, and innovative technology project partnerships
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-white animate-fade-in-left">
            <h3 className="text-xl font-bold mb-8">Professional Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 bg-white/10 rounded-2xl backdrop-blur-lg hover:bg-white/20 transition-all duration-500 hover-lift animate-scale-in stagger-1 group">
                <Mail className="h-8 w-8 text-blue-200 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-bold text-blue-100 text-xs mb-1">Professional Email</h4>
                  <a 
                    href="mailto:kashifmujeeb199@gmail.com" 
                    className="text-white hover:text-blue-200 transition-colors duration-300 text-xs"
                  >
                    kashifmujeeb199@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-white/10 rounded-2xl backdrop-blur-lg hover:bg-white/20 transition-all duration-500 hover-lift animate-scale-in stagger-2 group">
                <Phone className="h-8 w-8 text-blue-200 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-bold text-blue-100 text-xs mb-1">Direct Contact</h4>
                  <a 
                    href="tel:+923091352937" 
                    className="text-white hover:text-blue-200 transition-colors duration-300 text-xs"
                  >
                    +92 309 135 2937
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-white/10 rounded-2xl backdrop-blur-lg hover:bg-white/20 transition-all duration-500 hover-lift animate-scale-in stagger-3 group">
                <Linkedin className="h-8 w-8 text-blue-200 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-bold text-blue-100 text-xs mb-1">Professional Network</h4>
                  <a 
                    href="https://www.linkedin.com/in/kashif-mujeeb-64789616a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-200 transition-colors duration-300 text-xs"
                  >
                    linkedin.com/in/kashif-mujeeb-64789616a
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-white/10 rounded-2xl backdrop-blur-lg hover:bg-white/20 transition-all duration-500 hover-lift animate-scale-in stagger-5 group">
                <Github className="h-8 w-8 text-blue-200 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-bold text-blue-100 text-xs mb-1">Professional Portfolio</h4>
                  <a 
                    href="https://github.com/Kashifmujeeb17" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-200 transition-colors duration-300 text-xs"
                  >
                    github.com/Kashifmujeeb17
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-white/10 rounded-2xl backdrop-blur-lg hover:bg-white/20 transition-all duration-500 hover-lift animate-scale-in stagger-4 group">
                <MapPin className="h-8 w-8 text-blue-200 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-bold text-blue-100 text-xs mb-1">Geographic Location</h4>
                  <p className="text-white text-xs">Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-8 bg-white/10 rounded-2xl backdrop-blur-lg hover-lift animate-scale-in stagger-6">
              <h4 className="font-bold text-blue-100 mb-3 text-xs">Current Professional Position</h4>
              <p className="text-white text-[10px] leading-relaxed">
                Currently serving as Science & Engineering Associate - AI Engineer at United Bank Limited, with specialized focus on developing innovative artificial intelligence solutions for the financial services industry.
              </p>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-3xl p-10 hover-lift animate-fade-in-right">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Professional Inquiry Form</h3>
            
            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block font-semibold text-gray-700 mb-2 text-xs">
                  Professional Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-xs hover:border-blue-400"
                  placeholder="Your professional name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-semibold text-gray-700 mb-2 text-xs">
                  Professional Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-xs hover:border-blue-400"
                  placeholder="your.professional@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-semibold text-gray-700 mb-2 text-xs">
                  Inquiry Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-xs hover:border-blue-400"
                  placeholder="Professional consultation topic"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-semibold text-gray-700 mb-2 text-xs">
                  Professional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-vertical text-xs hover:border-blue-400"
                  placeholder="Please describe your professional inquiry or collaboration opportunity..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-2 px-6 rounded-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex items-center justify-center gap-3 text-xs animate-gradient hover-glow"
              >
                <Send className="h-6 w-6" />
                Submit Professional Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;