import React from "react";
import { useEffect, useRef, useState} from 'react';
import { Player } from '@lordicon/react';
const ICON = require('./lottie/wired-flat-1326-command-window-line-hover-blinking.json')

const Navbar = () => {
  const playerRef = useRef(null);
  
    useEffect(() => {
        playerRef.current?.playFromBeginning();
    }, [])
  
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
      const handleScroll = () => {
        const sections = ['home', 'projects', 'skills', 'links'];
        const curSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (curSection) setActiveSection(curSection);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      element.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <nav className="navbar">
      <div className="logo">
        <Player
          ref={playerRef}
          size={50}
          icon={ICON}
          onComplete={() => playerRef.current?.playFromBeginning()}
        />
        <h1>Shlok Arora</h1>
      </div>
      <div className="nav-links">
      {[
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'links', label: 'Links' }
      ].map((item, index) => (
        <React.Fragment key={item.id}>
          <h1 className="hashtag">#</h1>
          <button 
            onClick={() => scrollToSection(item.id)}
            className={`nav-button ${activeSection === item.id ? 'curr' : ''}`}
          >
            {item.label}
          </button>
        </React.Fragment>
      ))}
    </div>
    </nav>
  );
};

export default Navbar;
