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
          I'm a <span className="hashtag">builder</span> at heart—curious, hands-on, and always chasing the next meaningful problem. I love turning abstract <span className="hashtag">AI concepts</span> into real, usable products that make a difference. Whether it's training models, crafting APIs, or deploying <span className="hashtag">full-stack systems</span>, I enjoy every step of the process. For me, tech is not just about writing code—it's about creating <span className="hashtag">impact</span> with intention and creativity.
        </h2>
        </div>
        <img src={logo} alt="nn" />
      </div>
      <br />
      <figure className="quote">
        <blockquote className="quote__text">
          Talk is cheap. Show me the code.
        </blockquote>
        <figcaption className="quote__author">Linus Torvalds</figcaption>
      </figure>
    </>
  );
};

export default Intro;
