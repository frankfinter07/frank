import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-signlens-black border-t border-white/10 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img className="h-10 w-auto" src="/images/2.png" alt="SignLens Logo" />
            <p className="text-gray-400 text-sm max-w-xs">
              Capturing Moments, Creating Inclusion.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-signlens-red transition-colors">KSL Interpretation</a></li>
              <li><a href="#" className="hover:text-signlens-red transition-colors">Captioning</a></li>
              <li><a href="#" className="hover:text-signlens-red transition-colors">Audio Description</a></li>
              <li><a href="#" className="hover:text-signlens-red transition-colors">Consultancy</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#impact" className="hover:text-signlens-red transition-colors">About Us</a></li>
              <li><a href="#impact" className="hover:text-signlens-red transition-colors">Our Impact</a></li>
              <li><a href="#" className="hover:text-signlens-red transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-signlens-red transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-signlens-red transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-signlens-red transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SignLens Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
