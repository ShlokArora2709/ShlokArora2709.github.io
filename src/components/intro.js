import React, { useState, useEffect } from "react";
import logo from "./images/12eca-machine-learning.gif"
const Intro = () => {
  const text = "Hii, I'm Shlok Arora"; // Text to display
  const [displayedText, setDisplayedText] = useState(""); // State for displayed text
  const typingSpeed = 125; // Typing speed in milliseconds

  useEffect(() => {
    let currentIndex = 0;

    const typeCharacter = () => {
      if (currentIndex < text.length-1) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval); 
      }
    };

    const interval = setInterval(typeCharacter, typingSpeed);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [text]);
  return (
    <>
    <div className="container">
      <div className="content">
        <div className="typing-container">
        <h1>{displayedText}
        <span className="caret">|</span>
        </h1>
        </div>
        <h2>
          Passionate about transforming data into actionable insights, I thrive at the intersection of{" "}
          <span className="hashtag">Data science and Machine learning.</span> With a knack for uncovering patterns and building
          predictive models, I'm driven by the endless possibilities of{" "}
          <span className="hashtag">Artificial intelligence.</span>
          
        </h2>
        </div>
        <img src={logo} alt="nn" />
      </div>
      <br />
      <figure className="quote">
        <blockquote className="quote__text">
          Attention is all you need
        </blockquote>
        <figcaption className="quote__author">8 people from Google</figcaption>
      </figure>
    </>
  );
};

export default Intro;
