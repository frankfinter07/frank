import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import Services from './components/Services';
import Training from './components/Training';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-signlens-black text-white selection:bg-signlens-red selection:text-white">
      <Navbar />
      <Hero />
      <Impact />
      <Services />
      <Training />
      <Footer />
    </div>
  );
}

export default App;
