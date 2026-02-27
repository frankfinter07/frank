import React from 'react';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="relative py-24 bg-signlens-black text-white overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-signlens-red/10 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
              Our Impact
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-signlens-red rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              SignLens is more than a business; it’s a movement for digital inclusivity. By bridging the communication gap for the <strong className="text-white">900,000+ Deaf and hard of hearing individuals in Kenya</strong>, we empower organizations to reach a total addressable market of <strong className="text-white">3.5M people</strong>.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-signlens-red/50 transition-colors">
                <span className="block text-4xl font-bold text-signlens-red mb-2">900K+</span>
                <span className="text-sm text-gray-400 uppercase tracking-wider">Deaf Individuals Reached</span>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-signlens-red/50 transition-colors">
                <span className="block text-4xl font-bold text-signlens-red mb-2">3.5M</span>
                <span className="text-sm text-gray-400 uppercase tracking-wider">Total Market Size</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-signlens-red rounded-2xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3870&auto=format&fit=crop"
              alt="Sign Language Interpreter"
              className="relative rounded-2xl shadow-2xl border border-white/10 w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
