import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-signlens-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img className="h-10 w-auto" src="/images/2.png" alt="SignLens Logo" />
            {/* <span className="font-bold text-xl tracking-widest text-white">SIGNLENS</span> */}
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#impact" className="hover:text-signlens-red px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Our Impact</a>
              <a href="#services" className="hover:text-signlens-red px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Accessibility Services</a>
              <a href="#training" className="hover:text-signlens-red px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Training</a>
              <a href="#contact" className="bg-signlens-red hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-red-glow">Get Started</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-signlens-black border-b border-white/10">
            <a href="#impact" className="block hover:text-signlens-red px-3 py-2 rounded-md text-base font-medium">Our Impact</a>
            <a href="#services" className="block hover:text-signlens-red px-3 py-2 rounded-md text-base font-medium">Accessibility Services</a>
            <a href="#training" className="block hover:text-signlens-red px-3 py-2 rounded-md text-base font-medium">Training</a>
            <a href="#contact" className="block w-full text-center bg-signlens-red hover:bg-red-700 text-white px-4 py-2 rounded-full text-base font-bold mt-4">Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
