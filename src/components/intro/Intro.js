import React, { useEffect, useRef } from "react";
import { init } from "ityped";

import "./intro.scss";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software Engineer", "Designer", "Web Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="man"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Dimitris Tsikopoulos</h1>
          <h3>
            I'm a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png"></img>
        </a>
      </div>
    </div>
  );
};

export default Intro;
