import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css"

import Intro from "./components/intro";
import Skills from "./components/skills"
import Projects from "./components/projects"

function App() {
  return (
    <>
      <Intro/>
      <Projects/>
      <Skills/>
      
      
    </>
  );
};

export default App;
