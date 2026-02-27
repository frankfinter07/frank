import React from 'react';

const Training: React.FC = () => {
  return (
    <section id="training" className="relative py-24 bg-signlens-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-signlens-red opacity-20 blur-xl rounded-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=3870&auto=format&fit=crop"
              alt="Training Workshop"
              className="relative rounded-2xl shadow-2xl border border-white/10 w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Training & Consultancy
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              We empower businesses to lead the transformation. Our consultancy and training sessions help your team integrate digital accessibility best practices into your long-term branding and media strategies.
            </p>

            <ul className="space-y-4 mt-6">
              {[
                'Inclusive Communication Workshops',
                'Digital Accessibility Audits',
                'Sign Language Basics for Teams',
                'Policy Development Support'
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-300">
                  <svg className="w-6 h-6 text-signlens-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 px-8 py-4 bg-transparent border border-signlens-red text-signlens-red font-bold rounded-full hover:bg-signlens-red hover:text-white transition-all duration-300 shadow-red-glow">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
