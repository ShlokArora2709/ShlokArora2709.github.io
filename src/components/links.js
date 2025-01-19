import React from "react";
import { useEffect, useRef, useState} from 'react';
import { Player } from '@lordicon/react';
import github from "./images/icons8-github-64.png"

const MailIcon= require('./lottie/wired-outline-1141-email-hover-click.json');
const LinkIcon = require('./lottie/wired-flat-11-link-unlink-in-reveal.json');
const LinkedinIcon = require('./lottie/wired-outline-2549-logo-linkedin-morph-circle.json');

const Links= () => {
    const playerRef=useRef(null);
    const playerRef1=useRef(null);
    const playerRef2=useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
            playerRef.current?.playFromBeginning();
            playerRef1.current?.playFromBeginning();
            playerRef2.current?.playFromBeginning();
        }, [])
    
    return(
    <>
        <div className="container2">
        <div className="page">
            <p className="page_title"><span className="hashtag">/</span>links</p>
            <h2 className="page_text">contact me</h2>
        </div>
    </div>
    <div className="links">
        <div>
    <div className="clink" onMouseEnter={()=>playerRef1.current?.playFromBeginning()}>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shlokaora2709@gmail.com" target="_blank" rel="noreferrer">
        <Player
          ref={playerRef1}
          size={70}
          icon={MailIcon}
        /></a>
        <p className="link-text"><span>{'<='}</span> Gmail</p>
    </div>
    <div className="clink" onMouseEnter={()=>playerRef2.current?.playFromBeginning()}>
        <a href="https://www.linkedin.com/in/shlok-arora-091250269/" target="_blank" rel="noreferrer">
        <Player
          ref={playerRef2}
          size={70}
          icon={LinkedinIcon}
        /></a>
    <p className="link-text"><span>{'<='}</span> Linkedin</p>
    </div>

    <div className="clink" onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}
    >
        <a href="https://github.com/ShlokArora2709/" target="_blank" rel="noreferrer">
            <img width="70" height="70" src={github} alt="github" className={`${isHovered ? "hover-class" : ""}`}/>
            </a>
            <p className="link-text"><span>{'<='}</span> GitHub</p>
    </div>
    </div>
    <div className="link-icon">
        <Player
          ref={playerRef}
          size={300}
          icon={LinkIcon}
        />
    </div>
</div>
</>
    );
};

export default Links;