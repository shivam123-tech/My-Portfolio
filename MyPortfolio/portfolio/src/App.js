import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Project from "./components/Project";

import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Resume />
      <Services />
      <Project/>
      <Contact />
    </>
  );
};

export default App;
