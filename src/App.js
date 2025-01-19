import './App.css';
import React from 'react';
import Intro from './components/intro';
import Navbar from './components/navbar';
import Project from './components/projects';
import Skills from './components/skills';
import Links from './components/links';

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Intro />
      </div>
      <br />
      <div id="projects">
        <Project />
      </div>
      <br />
      <div id="skills">
        <Skills />
      </div>
      <br />
      <div id="links">
        <Links />
      </div>
    </>
  );
}

export default App;