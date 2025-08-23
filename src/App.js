import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import ExperimentProjects from './components/ExperimentProjects';

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Projects />
      {/* <ExperimentProjects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;



