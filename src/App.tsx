
import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
