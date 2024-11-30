import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Statistics from './components/Statistics/Statistics';
import HowItWorks from './components/HowItWorks/HowItWorks';
import About from './components/About/About';
import Support from './components/Support/Support';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  console.log('Rendering App Component');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Statistics />
        <HowItWorks />
        <About />
        <Support />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;