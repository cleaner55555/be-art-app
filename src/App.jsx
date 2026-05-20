import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
