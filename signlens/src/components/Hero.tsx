import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <img
          src="https://images.unsplash.com/photo-1579621970588-a35d0e87eb1b?q=80&w=3870&auto=format&fit=crop"
          alt="Diverse media crew at work"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-signlens-black via-transparent to-signlens-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
          CAPTURING MOMENTS,<br />
          <span className="text-signlens-red">CREATING INCLUSION</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Bridging the communication gap through inclusive media, sign language interpretation, and digital accessibility.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#impact"
            className="px-8 py-4 bg-signlens-red text-white font-bold rounded-full hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(255,49,49,0.4)] hover:shadow-[0_0_30px_rgba(255,49,49,0.6)] transform hover:-translate-y-1"
          >
            Our Impact
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-signlens-black transition-all transform hover:-translate-y-1"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
