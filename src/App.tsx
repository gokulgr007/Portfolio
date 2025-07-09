import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <Projects />
      <section id="experience">
        <Experience />
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;