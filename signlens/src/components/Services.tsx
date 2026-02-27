import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 bg-signlens-black text-white">
      {/* Background with subtle dots or grid pattern could be nice, keeping it minimal for now */}
      <div className="absolute inset-0 bg-gradient-to-br from-signlens-black via-signlens-black/80 to-signlens-red/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Services</h2>
          <div className="w-24 h-1 bg-signlens-red mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
            We specialize in high-quality inclusive media. From Kenyan Sign Language (KSL) interpretation and precise captioning to audio descriptions, we ensure your content is accessible to everyone, everywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1: KSL Interpretation */}
          <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-white/10 hover:border-signlens-red/50 shadow-red-glow hover:shadow-2xl">
            <div className="w-16 h-16 bg-signlens-red/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-signlens-red transition-colors duration-300">
              <svg className="w-8 h-8 text-signlens-red group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">KSL Interpretation</h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
              Professional on-screen and live event interpretation to bridge the gap between spoken and sign languages seamlessly.
            </p>
          </div>

          {/* Service 2: Captioning */}
          <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-white/10 hover:border-signlens-red/50 shadow-red-glow hover:shadow-2xl">
            <div className="w-16 h-16 bg-signlens-red/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-signlens-red transition-colors duration-300">
              <svg className="w-8 h-8 text-signlens-red group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Captioning & Subtitling</h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
              Precise, synchronized captions for videos, webinars, and broadcasts ensuring full comprehension for all viewers.
            </p>
          </div>

          {/* Service 3: Audio Description */}
          <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-white/10 hover:border-signlens-red/50 shadow-red-glow hover:shadow-2xl">
            <div className="w-16 h-16 bg-signlens-red/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-signlens-red transition-colors duration-300">
              <svg className="w-8 h-8 text-signlens-red group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Audio Description</h3>
            <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
              Detailed narration of visual elements for the blind and visually impaired, creating a complete sensory experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
