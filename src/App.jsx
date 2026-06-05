import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Internships from './components/Internships';
import Volunteering from './components/Volunteering';
import Achievements from './components/Achievements';
import GithubShowcase from './components/GithubShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeDBackground from './components/ThreeDBackground';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-primary-500/30">
      {/* 3D Dynamic Particle Background */}
      <ThreeDBackground />

      {/* Animated Background Blobs for ambient glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-purple-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

        
        <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col gap-24">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Internships />
          <Hackathons />
          <Volunteering />
          <Achievements />
          <GithubShowcase />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
