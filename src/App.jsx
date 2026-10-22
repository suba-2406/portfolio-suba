import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF5EF] text-[#655A54] font-sans antialiased selection:bg-[#E9D3BF] selection:text-[#49352D]">
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main Content Sections - Directly loaded with zero intro animation delay */}
      <main className="w-full flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
