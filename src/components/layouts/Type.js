import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cloud & DevOps Enthusiasts",
          "Developer",
          "Frontend Developer",

          "and this is my portfolio...",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        pauseFor: 500,
      }}
    />
  );
}

export default Type;
