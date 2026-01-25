import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = ({ darkMode, portfolioData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    // You can integrate EmailJS or backend API here
  };

  return (
    <section id="contact" className="py-20 px-4" aria-labelledby="contact-title">
      <div className="max-w-6xl mx-auto">
          <h2 id="contact-title" className={`text-4xl font-bold mb-12 ${darkMode ? 'text-blue-100' : 'text-blue-800'}`}>CONTACT</h2>

        <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <address className="flex items-center gap-4 not-italic">
              <div className="relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-2xl opacity-50`} style={{
                  background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'borderFlow 3s linear infinite'
                }}></div>
                <div className={`relative w-16 h-16 rounded-2xl ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100'} flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300`}>
                  <Mail className={darkMode ? "text-cyan-400" : "text-blue-600"} size={28} />
                </div>
              </address>

              <div className="flex items-center gap-4">
                <div className="relative">
              <div className="relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-2xl opacity-50`} style={{
                  background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'borderFlow 3s linear infinite',
                  animationDelay: '0.3s'
                }}></div>
                <div className={`relative w-16 h-16 rounded-2xl ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100'} flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300`}>
                  <svg className={darkMode ? "text-cyan-400" : "text-blue-600"} width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className={`${darkMode ? 'text-blue-200' : 'text-blue-700'} text-lg`}>District 7, Ho Chi Minh City</p>
                <p className={`${darkMode ? 'text-blue-200' : 'text-blue-700'} text-lg`}>Vietnam</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
              <div className="relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${darkMode ? 'from-blue-500 via-cyan-500 to-blue-500' : 'from-blue-400 via-blue-300 to-blue-400'} rounded-2xl opacity-50`} style={{
                  background: darkMode ? 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)' : 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'borderFlow 3s linear infinite',
                  animationDelay: '0.6s'
                }}></div>
                <div className={`relative w-16 h-16 rounded-2xl ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100'} flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300`}>
                  <svg className={darkMode ? "text-cyan-400" : "text-blue-600"} width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <div>
                <a href="tel:+84934159597" className={`${darkMode ? 'text-blue-200 hover:text-cyan-300' : 'text-blue-700 hover:text-blue-800'} text-lg transition-colors`}>
                  +84 93 415 9597
                </a>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-xl ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} backdrop-blur flex items-center justify-center border ${darkMode ? 'border-blue-800/30 hover:border-cyan-600' : 'border-blue-200 hover:border-blue-400'} transition-all hover:scale-110`}
              >
                <Github className={darkMode ? "text-cyan-400" : "text-blue-600"} size={20} />
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-xl ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} backdrop-blur flex items-center justify-center border ${darkMode ? 'border-blue-800/30 hover:border-cyan-600' : 'border-blue-200 hover:border-blue-400'} transition-all hover:scale-110`}
              >
                <Linkedin className={darkMode ? "text-cyan-400" : "text-blue-600"} size={20} />
              </a>
            </div>
          </div>

          <div className={`${darkMode ? 'bg-slate-900/60 border-blue-700/40' : 'bg-white/80 border-blue-300'} backdrop-blur rounded-2xl p-8 border-2 transition-all duration-300`}>
            <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="space-y-6" noValidate>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  aria-label="Your name"
                  aria-required="true"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-900/60 border-blue-700/60' : 'bg-blue-100/40 border-blue-400/60'} border-2 rounded-xl ${darkMode ? 'text-blue-200 placeholder-blue-400/70' : 'text-blue-800 placeholder-blue-600/70'} focus:outline-none ${darkMode ? 'focus:border-blue-500' : 'focus:border-blue-500'} transition-colors`}
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  aria-label="Your email address"
                  aria-required="true"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-900/60 border-blue-700/60' : 'bg-blue-100/40 border-blue-400/60'} border-2 rounded-xl ${darkMode ? 'text-blue-200 placeholder-blue-400/70' : 'text-blue-800 placeholder-blue-600/70'} focus:outline-none ${darkMode ? 'focus:border-blue-500' : 'focus:border-blue-500'} transition-colors`}
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  aria-label="Message subject"
                  aria-required="true"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-900/60 border-blue-700/60' : 'bg-blue-100/40 border-blue-400/60'} border-2 rounded-xl ${darkMode ? 'text-blue-200 placeholder-blue-400/70' : 'text-blue-800 placeholder-blue-600/70'} focus:outline-none ${darkMode ? 'focus:border-blue-500' : 'focus:border-blue-500'} transition-colors`}
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  aria-label="Your message"
                  aria-required="true"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-6 py-4 ${darkMode ? 'bg-slate-900/60 border-blue-700/60' : 'bg-blue-100/40 border-blue-400/60'} border-2 rounded-xl ${darkMode ? 'text-blue-200 placeholder-blue-400/70' : 'text-blue-800 placeholder-blue-600/70'} focus:outline-none ${darkMode ? 'focus:border-blue-500' : 'focus:border-blue-500'} transition-colors resize-none`}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn-ripple relative overflow-visible w-full ${darkMode ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'bg-gradient-to-r from-blue-500 to-blue-600'} text-white font-semibold px-8 py-4 rounded-xl transition-all duration-500 transform hover:scale-[1.02] ${darkMode ? 'shadow-lg shadow-cyan-500/30' : 'shadow-lg shadow-blue-400/30'}`}
                style={{
                  transition: 'background 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = darkMode
                    ? 'linear-gradient(to right, rgb(34, 211, 238), rgb(59, 130, 246))'
                    : 'linear-gradient(to right, rgb(59, 130, 246), rgb(34, 211, 238))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = darkMode
                    ? 'linear-gradient(to right, rgb(37, 99, 235), rgb(34, 211, 238))'
                    : 'linear-gradient(to right, rgb(59, 130, 246), rgb(37, 99, 235))';
                }}
              >
                <span className="ripple-wave-1 absolute inset-0 rounded-xl pointer-events-none" style={{
                  background: 'radial-gradient(circle, rgba(34, 211, 238, 0.7) 0%, transparent 70%)'
                }}></span>
                <span className="ripple-wave-2 absolute inset-0 rounded-xl pointer-events-none" style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)'
                }}></span>
                <span className="relative z-10">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;